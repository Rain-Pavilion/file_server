const path = require('path');
/**
 * 运行配置
 */

 var config = (function() {
    return {
      // public interface
      systemUser : "yuting",
      systemPassword : "yuting",    
      port : 8080,
      uploadDir: path.join(process.cwd(), 'uploads/'),
      login_record_path: path.join(process.cwd(), "log", 'login_record.json'),
      setUploadDir(newUrl) {
        let _this = this
        _this.uploadDir= newUrl
      }
    }
  })()
  
module.exports = { config }
