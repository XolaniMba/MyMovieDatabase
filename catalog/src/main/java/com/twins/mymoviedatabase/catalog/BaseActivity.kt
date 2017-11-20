package com.twins.mymoviedatabase.catalog

import android.annotation.SuppressLint
import android.os.Bundle
import com.twins.mymoviedatabase.ui.util.IMAGE_LOADER
import dagger.android.support.DaggerAppCompatActivity

/**
 * Created by bukalapak on 11/21/17.
 */
@SuppressLint("Registered")
open class BaseActivity : DaggerAppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        IMAGE_LOADER = App.COMPONENT.imageLoader()
    }

}