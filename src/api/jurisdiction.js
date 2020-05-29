export function checkJurisdiction (key) {
  // 权限数组
  const jurisdictionList = ['1', '2', '3', '5']
  const index = jurisdictionList.indexOf(key)
  if (index > -1) {
    // 有权限
    return true
  } else {
    // 无权限
    return false
  }
}
