import {InjectionToken} from "@angular/core";

export interface AppConfig {
  storageType: 'local' | 'session'
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
  factory: () => ({
    storageType: 'local'
  })
});
