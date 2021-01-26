import React, { FunctionComponent } from 'react';
import { Alert, makeStyles } from '@material-ui/core';
import {
  BuildFirmWareProgressNotificationData,
  BuildFirmWareProgressNotificationType,
  BuildFirmwareStep,
} from '../../../main/handlers/BuildFirmwareHandler';

interface BuildNotificationsListProps {
  notifications: BuildFirmWareProgressNotificationData[];
}

const useStyles = makeStyles((theme) => ({
  notification: {
    marginBottom: `${theme.spacing(1)} !important`,
  },
}));

const BuildNotificationsList: FunctionComponent<BuildNotificationsListProps> = ({
  notifications,
}) => {
  const styles = useStyles();
  const toSeverity = (
    item: BuildFirmWareProgressNotificationType
  ): 'error' | 'info' | 'success' => {
    switch (item) {
      case BuildFirmWareProgressNotificationType.Error:
        return 'error';
      case BuildFirmWareProgressNotificationType.Info:
        return 'info';
      case BuildFirmWareProgressNotificationType.Success:
        return 'success';
      default:
        return 'info';
    }
  };
  // TODO: this should be used for translations
  const toText = (step: BuildFirmwareStep): string => {
    switch (step) {
      case BuildFirmwareStep.VERIFYING_BUILD_SYSTEM:
        return 'Verifying build system';
      case BuildFirmwareStep.DOWNLOADING_FIRMWARE:
        return 'Downloading firmware';
      case BuildFirmwareStep.BUILDING_USER_DEFINES:
        return 'Building user_defines.txt';
      case BuildFirmwareStep.BUILDING_FIRMWARE:
        return 'Compiling firmware';
      case BuildFirmwareStep.FLASHING_FIRMWARE:
        return 'Flashing device';
      default:
        return '';
    }
  };
  return (
    <>
      {notifications.map((item, idx) => {
        return (
          <React.Fragment key={`${idx}-${item.step}`}>
            <Alert
              className={styles.notification}
              severity={toSeverity(item.type)}
            >
              {item?.step !== undefined && toText(item.step)}
            </Alert>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default BuildNotificationsList;