/*
 * Wazuh app - Error Orchestrator for business implementation
 * Copyright (C) 2015-2021 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

import { UIErrorLog } from '../../../common/constants';
import { ErrorOrchestratorBase } from './error-orchestrator-base';

export class ErrorOrchestratorBusiness extends ErrorOrchestratorBase {
  public displayError(errorLog: UIErrorLog) {
    super.displayError(errorLog);
  }
}
