import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {AppComponent} from './app.component';

/** 配置 angular i18n **/
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

// ng-icon 单独引入
// import { IconDefinition } from '@ant-design/icons-angular';
// import { NzIconModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd/icon';
//
// // 引入你需要的图标，比如你需要 fill 主题的 AccountBook Alert 和 outline 主题的 Alert，推荐 ✔️
// import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
//
// const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];

// 路由
import MilesStoneModule from './routes-samples/index/miles-stone.module'
// import { HeroesModule } from './routes-samples/miles-stone3/heroes.module'
import AppRoutingModule from './routes-samples/app-routing.module';
import { LoginComponent } from './routes-samples/auth/login/login.component';
// import {AdminModule} from './routes-samples/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    // NzIconModule,
    MilesStoneModule,
    // HeroesModule,
    // AdminModule,
    AppRoutingModule
  ],
  exports: [
    NgZorroAntdModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    //   { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' }, // 不提供的话，即为 Ant Design 的主题蓝色
    //   { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
