import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_CONFIG, AppConfig} from "../config/config";
import {StorageLocalService} from "../services/storage-local.service";
import {StorageSessionService} from "../services/storage-session.service";
import {UserStorageData} from "../models/User";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffect} from "./store/effects/login.effect";
import {LogoutEffect} from "./store/effects/logout.effect";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffect, LogoutEffect])
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
export class AuthModule {
}
