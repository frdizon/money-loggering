import { useCallback, useState } from "react";
import { useDeleteActivityMutation } from "../../../../../redux/activityApi";

const useDeleteActivity = (
  activityId: number,
  onDeleteCloseCallback: () => void
) => {
  const [isDeleteWarningShown, setDeleteWarningShown] = useState(false);

  const [deleteActivityMutation, { isLoading: isDeleteLoading }] =
    useDeleteActivityMutation();

  const handleDelete = useCallback(() => {
    deleteActivityMutation(activityId).then(() => {
      onDeleteCloseCallback();
    });
  }, [activityId, deleteActivityMutation, onDeleteCloseCallback]);

  const handleDeleteCancel = useCallback(() => {
    setDeleteWarningShown(false);
  }, []);

  const handleDisplayDeleteConfirmation = useCallback(() => {
    setDeleteWarningShown(true);
  }, []);

  return {
    isDeleteWarningShown,
    isDeleteLoading,
    onDelete: handleDelete,
    onDeleteCancel: handleDeleteCancel,
    onDisplayDeleteConfirmation: handleDisplayDeleteConfirmation,
  };
};

export default useDeleteActivity;
