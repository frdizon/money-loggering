import { FC, useCallback, useMemo, useState } from "react";
import WithAppBarLayout from "../../common/components/WithAppBarLayout/WithAppBarLayout";
import ActivityTable from "../../common/components/ActivityTable/ActivityTable";
import DashboardLayout from "./components/Layout/Layout";
import SummaryGraph from "../../common/components/SummaryGraph/SummaryGraph";
import useGetActivitiesApi from "./utils/useGetActivitiesApi";
import AddActivityDialog from "./components/AddActivityDialog/AddActivityDialog";
import { TShownDashboardDialog } from "./types";
import convertToWeeklyData from "./utils/convertToWeeklyData";
import AppbarButtons from "./components/AppbarButtons/AppbarButtons";
import ModifyCategoriesDialog from "./components/ModifyCategoriesDialog/ModifyCategoriesDialog";
import ModifyQueryDialog from "./components/ModifyQueryDialog/ModifyQueryDialog";

const Dashboard: FC = () => {
  const [shownDialog, setShownDialog] = useState<TShownDashboardDialog>("");

  const handleSetShownDialog = useCallback(
    (shownDialog: TShownDashboardDialog) => {
      setShownDialog(shownDialog);
    },
    []
  );

  const handleHideDialog = useCallback(() => {
    setShownDialog("");
  }, []);

  const { data, handleCallApi: refetchGetActivities } = useGetActivitiesApi();

  const { weeklyDataArr, categoriesArr } = useMemo(
    () => convertToWeeklyData(data),
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
          tableComponent={<ActivityTable activityData={data} />}
        />
      </WithAppBarLayout>
      {/* Dashboard Dialogs here */}
      <AddActivityDialog
        isOpen={shownDialog === "add-activity"}
        onDialogClose={handleHideDialog}
        handleSuccess={refetchGetActivities}
      />
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
