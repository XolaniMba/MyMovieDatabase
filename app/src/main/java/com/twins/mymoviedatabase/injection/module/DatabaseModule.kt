package com.twins.mymoviedatabase.injection.module

import dagger.Module
import dagger.Provides
import io.realm.Realm
import io.realm.RealmConfiguration

/**
 * Created by bukalapak on 10/2/17.
 */
@Module
object DatabaseModule {

    @JvmStatic
    @Provides
    fun provideRealm(): Realm {
        val config = RealmConfiguration.Builder()
                .name("myrealm.realm")
                .schemaVersion(1)
                .build()
        return Realm.getInstance(config)
    }

}