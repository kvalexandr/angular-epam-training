import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import {APP_CONFIG, AppConfig} from "../config/config";
import {StorageLocalService} from "../services/storage-local.service";
import {StorageSessionService} from "../services/storage-session.service";
import {UserStorageData} from "../models/User";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    {
      provide: UserStorageData,
      useFactory: (config: AppConfig) => {
        switch (config.storageType) {
          case 'local':
            return new StorageLocalService()
          case 'session':
            return new StorageSessionService()
          default:
            throw new Error('Not service storage');
        }
      },
      deps: [APP_CONFIG]
    }
  ]
})
export class AuthModule { }
