// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { AppModule } from './app.module';

if (app.android) {
  app.on('launch', args => {
    //   console.log('onLaunch');
      app.android.on('activityStarted', ({activity}) => {
        //   console.log('onStarted');
          var window = activity.getWindow();
          if (window) {
            //   window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(0xFFFFFFFF));

              // Prevent the soft keyboard from hiding EditText's while typing.
              window.setSoftInputMode(32); //android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN;
          }
      });
  });
}

// if (app.ios) {
//   app.on('launch', args => {
//       (<any>utils.ios.getter(UIApplication, UIApplication.sharedApplication)).statusBarStyle = UIStatusBarStyle.LightContent;
//       setTimeout(() => {
//           utils.ios.getter(UIApplication, UIApplication.sharedApplication).keyWindow.backgroundColor = utils.ios.getter(UIColor, UIColor.colorWithRedGreenBlueAlpha(1, 1, 1, 1));
//       }, 1);
//   });
// }

platformNativeScriptDynamic().bootstrapModule(AppModule);
