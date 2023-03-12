package expo.modules.sqlitestorage

import android.content.Context
import expo.modules.core.BasePackage
import expo.modules.core.ExportedModule

class SQLitePackage : BasePackage() {
  override fun createExportedModules(context: Context): List<ExportedModule> {
    return listOf(ExpoSqliteStorageModule(context))
  }
}
