'use strict';
exports.command = function(callback) {
  var self = this;
  self.windowHandle(function(handle) {
    self.windowHandles(function(handles) {
      if (handles.status === 0) {
        var len = handles.value.length;
        var i = 0;
        for (i = 0; i < len; ++i) {
          if (handle.value !== handles.value[i]) {
            self.window(handles.value[i]);
            self.showTest(true,
                          handle.value,
                          handles.value[i],
                          'Switched from ' + handle.value +
                          ' to ' + handles.value[i]);
            break;
          }
        }
        if (i >= len) {
          self.showTest(false,
                        handle.value,
                        '',
                        'Could not switch from window ' +
                        handle.value);
          self._errors.push('Couldn\'t ' +
                            'switch active window');
        }
      } else {
        self.showTest(false,
                      handle.value,
                      '',
                      'Could not switch from window ' +
                      handle.value);
        self._errors.push('Couldn\'t ' +
                          'switch active window');
      }
    });
  });
};
