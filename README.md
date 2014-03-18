output cpu/memory usage for JSX
================================


[node-usage](https://github.com/arunoda/node-usage) bindings for JSX

Getting Started
================================

```shell
$ npm install node-usage.jsx
```

```javascript
import "node-usage.jsx/node-usage.jsx";
import "test-case.jsx";
import "nodejs.jsx/*.jsx";
import "timer.jsx";

class _Test extends TestCase {
  function testUsage():void {
    var pid = process.pid;
    usage.lookup(pid, function(err, result) {
      log result; // { memory: 51826688, cpu: 67.3 }
      this.expect(result["memory"]).notToBe(null);
      this.expect(result["cpu"]).notToBe(null);
    });
  }
  function testUsageOS():void {
    log usage.sysinfo;
    this.expect(usage.sysinfo["OS"]).notToBe(null);
    this.expect(usage.sysinfo["path"]).notToBe(null);
  }
  function testUsageHistory():void {
    this.async(function(async : AsyncContext) : void {
      var pid = process.pid;
      var interval = Timer.setInterval(()->{
        usage.lookup(pid, {"keepHistory":true}, function(err, result) {
          log result; // { memory: 51826688, cpu: 67.3 }
          this.expect(result["memory"]).notToBe(null);
          this.expect(result["cpu"]).notToBe(null);
        });
      }, 100);
      Timer.setTimeout(()->{
        Timer.clearInterval(interval);
        async.done();
      }, 1000);
    }, 20000);
  }
}

```
