package com.restotrack;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

// *** ADDED CUSTOM - START ***
import android.os.Bundle;
import android.content.pm.ActivityInfo;
import org.devio.rn.splashscreen.SplashScreen; 
// *** ADDED CUSTOM - END ***

public class MainActivity extends ReactActivity {

  // *** ADDED CUSTOM - START ***
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  // here
      super.onCreate(null); 
      setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);  // programmatically
  }
  // *** ADDED CUSTOM - END ***

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "RestoTrack";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }
}
