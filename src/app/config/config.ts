import {InjectionToken, Provider} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../auth/auth.interceptor";

export interface AppConfig {
  storageType: 'local' | 'session'
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
  factory: () => ({
    storageType: 'local'
  })
});

export const AUTH_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
