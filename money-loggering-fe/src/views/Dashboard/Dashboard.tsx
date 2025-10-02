import { FC, useCallback, useMemo, useState } from "react";
import WithAppBarLayout from "../../common/components/WithAppBarLayout/WithAppBarLayout";
import ActivityTable from "./components/ActivityTable/ActivityTable";
import DashboardLayout from "./components/Layout/Layout";
import SummaryGraph from "../../common/components/SummaryGraph/SummaryGraph";
import AddActivityDialog from "./components/AddActivityDialog/AddActivityDialog";
import { TShownDashboardDialog } from "./types";
import convertToWeeklyData from "./utils/convertToWeeklyData";
import AppbarButtons from "./components/AppbarButtons/AppbarButtons";
import ModifyCategoriesDialog from "./components/ModifyCategoriesDialog/ModifyCategoriesDialog";
import ModifyQueryDialog from "./components/ModifyQueryDialog/ModifyQueryDialog";
import { TActivity, useGetActivitiesQuery } from "../../redux/activityApi";
import EditActivityDialog from "./components/EditActivityDialog/EditActivityDialog";

const Dashboard: FC = () => {
  const [shownDialog, setShownDialog] = useState<TShownDashboardDialog>("");
  const [activityToBeEdited, setActivityToBeEdited] = useState<
    undefined | TActivity
  >(undefined);

  const handleSetShownDialog = useCallback(
    (shownDialog: TShownDashboardDialog) => {
      setShownDialog(shownDialog);
    },
    []
  );

  const handleShowEditDialog = useCallback((activity: TActivity) => {
    setActivityToBeEdited(activity);
    setShownDialog("edit-activity");
  }, []);

  const handleHideDialog = useCallback(() => {
    setShownDialog("");
    setActivityToBeEdited(undefined);
  }, []);

  const { data } = useGetActivitiesQuery();

  const { weeklyDataArr, categoriesArr } = useMemo(
    () => convertToWeeklyData(data ?? []),
    [data]
  );

  return (
    <>
      <WithAppBarLayout
        menuComponent={<AppbarButtons onButtonClick={handleSetShownDialog} />}
      >
        <DashboardLayout
          graphComponent={
            <SummaryGraph
              chartData={weeklyDataArr}
              categoriesList={categoriesArr}
            />
          }
          tableComponent={
            <ActivityTable
              activityData={data ?? []}
              onEditActivity={handleShowEditDialog}
            />
          }
        />
      </WithAppBarLayout>
      {/* Dashboard Dialogs here */}
      <AddActivityDialog
        isOpen={shownDialog === "add-activity"}
        onDialogClose={handleHideDialog}
      />
      {activityToBeEdited && (
        <EditActivityDialog
          isOpen={shownDialog === "edit-activity"}
          onDialogClose={handleHideDialog}
          activity={activityToBeEdited}
        />
      )}
      <ModifyCategoriesDialog
        isOpen={shownDialog === "modify-categories"}
        onDialogClose={handleHideDialog}
      />
      <ModifyQueryDialog
        isOpen={shownDialog === "modify-query"}
        onDialogClose={handleHideDialog}
      />
    </>
  );
};

export default Dashboard;
