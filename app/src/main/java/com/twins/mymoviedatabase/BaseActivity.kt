package com.twins.mymoviedatabase

import android.annotation.SuppressLint
import android.content.SharedPreferences
import dagger.Lazy
import dagger.android.DaggerActivity
import io.realm.Realm
import javax.inject.Inject

/**
 * Created by bukalapak on 10/2/17.
 */
@SuppressLint("Registered")
open class BaseActivity : DaggerActivity() {

    @Inject
    lateinit var prefs: Lazy<SharedPreferences>
    @Inject
    lateinit var realm: Realm

    override fun onDestroy() {
        super.onDestroy()
        realm.close()
    }

}