"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1272],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,a[1]=r;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1601:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=n(7462),s=n(3366),o=(n(7294),n(3905)),a=["components"],r={title:"User Manual",sidebar_position:3},l="Linkis User Manual",u={unversionedId:"user_guide/user_manual",id:"user_guide/user_manual",isDocsHomePage:!1,title:"User Manual",description:"Linkis provides a convenient interface for calling JAVA and SCALA. It can be used only by introducing the linkis-computation-client module. After 1.0, the method of submitting with Label is added. The following will introduce both ways that compatible with 0.X and newly added in 1.0.",source:"@site/docs/user_guide/user_manual.md",sourceDirName:"user_guide",slug:"/user_guide/user_manual",permalink:"/docs/next/user_guide/user_manual",editUrl:"https://github.com/apache/incubator-linkis-website/edit/master/docs/user_guide/user_manual.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"User Manual",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Linkis-Cli Usage",permalink:"/docs/next/user_guide/linkiscli_usage"},next:{title:"Overview",permalink:"/docs/next/engine_usage/overview"}},c=[{value:"1. Introduce dependent modules",id:"1-introduce-dependent-modules",children:[]},{value:"2. Compatible with 0.X Execute method submission",id:"2-compatible-with-0x-execute-method-submission",children:[{value:"2.1 Java test code",id:"21-java-test-code",children:[]},{value:"3. Scala test code:",id:"3-scala-test-code",children:[]}]},{value:"3. Linkis1.0 new submit interface with Label support",id:"3-linkis10-new-submit-interface-with-label-support",children:[{value:"3.1 Java Test Class",id:"31-java-test-class",children:[]},{value:"3.2 Scala Test Class",id:"32-scala-test-class",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"linkis-user-manual"},"Linkis User Manual"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Linkis provides a convenient interface for calling JAVA and SCALA. It can be used only by introducing the linkis-computation-client module. After 1.0, the method of submitting with Label is added. The following will introduce both ways that compatible with 0.X and newly added in 1.0.")),(0,o.kt)("h2",{id:"1-introduce-dependent-modules"},"1. Introduce dependent modules"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<dependency>\n   <groupId>com.webank.wedatasphere.linkis</groupId>\n   <artifactId>linkis-computation-client</artifactId>\n   <version>${linkis.version}</version>\n</dependency>\nSuch as:\n<dependency>\n   <groupId>com.webank.wedatasphere.linkis</groupId>\n   <artifactId>linkis-computation-client</artifactId>\n   <version>1.0.0-RC1</version>\n</dependency>\n")),(0,o.kt)("h2",{id:"2-compatible-with-0x-execute-method-submission"},"2. Compatible with 0.X Execute method submission"),(0,o.kt)("h3",{id:"21-java-test-code"},"2.1 Java test code"),(0,o.kt)("p",null,"Create the Java test class UJESClientImplTestJ. Refer to the comments to understand the purposes of those interfaces:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.webank.wedatasphere.linkis.client.test;\n\nimport com.webank.wedatasphere.linkis.common.utils.Utils;\nimport com.webank.wedatasphere.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy;\nimport com.webank.wedatasphere.linkis.httpclient.dws.authentication.TokenAuthenticationStrategy;\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfig;\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfigBuilder;\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClient;\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClientImpl;\nimport com.webank.wedatasphere.linkis.ujes.client.request.JobExecuteAction;\nimport com.webank.wedatasphere.linkis.ujes.client.request.ResultSetAction;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobExecuteResult;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobInfoResult;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobProgressResult;\nimport org.apache.commons.io.IOUtils;\n\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.concurrent.TimeUnit;\n\npublic class LinkisClientTest {\n\n    public static void main(String[] args){\n\n        String user = "hadoop";\n        String executeCode = "show databases;";\n\n        // 1. Configure DWSClientBuilder, get a DWSClientConfig through DWSClientBuilder\n        DWSClientConfig clientConfig = ((DWSClientConfigBuilder) (DWSClientConfigBuilder.newBuilder()\n                .addServerUrl("http://${ip}:${port}")  //Specify ServerUrl, the address of the linkis gateway, such as http://{ip}:{port}\n                .connectionTimeout(30000)   //connectionTimeOut Client connection timeout\n                .discoveryEnabled(false).discoveryFrequency(1, TimeUnit.MINUTES)  //Whether to enable registration discovery, if enabled, the newly launched Gateway will be automatically discovered\n                .loadbalancerEnabled(true)  // Whether to enable load balancing, if registration discovery is not enabled, load balancing is meaningless\n                .maxConnectionSize(5)   //Specify the maximum number of connections, that is, the maximum number of concurrent\n                .retryEnabled(false).readTimeout(30000)   //Execution failed, whether to allow retry\n                .setAuthenticationStrategy(new StaticAuthenticationStrategy())   //AuthenticationStrategy Linkis login authentication method\n                .setAuthTokenKey("${username}").setAuthTokenValue("${password}")))  //Authentication key, generally the user name; authentication value, generally the password corresponding to the user name\n                .setDWSVersion("v1").build();  //The version of the linkis backend protocol, the current version is v1\n\n        // 2. Obtain a UJESClient through DWSClientConfig\n        UJESClient client = new UJESClientImpl(clientConfig);\n\n        try {\n            // 3. Start code execution\n            System.out.println("user : " + user + ", code : [" + executeCode + "]");\n            Map<String, Object> startupMap = new HashMap<String, Object>();\n            startupMap.put("wds.linkis.yarnqueue", "default"); // A variety of startup parameters can be stored in startupMap, see linkis management console configuration\n            JobExecuteResult jobExecuteResult = client.execute(JobExecuteAction.builder()\n                    .setCreator("linkisClient-Test")  //creator\uff0cthe system name of the client requesting linkis, used for system-level isolation\n                    .addExecuteCode(executeCode)   //ExecutionCode Requested code\n                    .setEngineType((JobExecuteAction.EngineType) JobExecuteAction.EngineType$.MODULE$.HIVE()) // The execution engine type of the linkis that you want to request, such as Spark hive, etc.\n                    .setUser(user)   //User\uff0cRequesting users; used for user-level multi-tenant isolation\n                    .setStartupParams(startupMap)\n                    .build());\n            System.out.println("execId: " + jobExecuteResult.getExecID() + ", taskId: " + jobExecuteResult.taskID());\n\n            // 4. Get the execution status of the script\n            JobInfoResult jobInfoResult = client.getJobInfo(jobExecuteResult);\n            int sleepTimeMills = 1000;\n            while(!jobInfoResult.isCompleted()) {\n                // 5. Get the execution progress of the script\n                JobProgressResult progress = client.progress(jobExecuteResult);\n                Utils.sleepQuietly(sleepTimeMills);\n                jobInfoResult = client.getJobInfo(jobExecuteResult);\n            }\n\n            // 6. Get the job information of the script\n            JobInfoResult jobInfo = client.getJobInfo(jobExecuteResult);\n            // 7. Get a list of result sets (if the user submits multiple SQL at a time, multiple result sets will be generated)\n            String resultSet = jobInfo.getResultSetList(client)[0];\n            // 8. Get a specific result set through a result set information\n            Object fileContents = client.resultSet(ResultSetAction.builder().setPath(resultSet).setUser(jobExecuteResult.getUser()).build()).getFileContent();\n            System.out.println("fileContents: " + fileContents);\n\n        } catch (Exception e) {\n            e.printStackTrace();\n            IOUtils.closeQuietly(client);\n        }\n        IOUtils.closeQuietly(client);\n    }\n}\n')),(0,o.kt)("p",null,"Run the above code to interact with Linkis"),(0,o.kt)("h3",{id:"3-scala-test-code"},"3. Scala test code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'package com.webank.wedatasphere.linkis.client.test\n\nimport java.util.concurrent.TimeUnit\n\nimport com.webank.wedatasphere.linkis.common.utils.Utils\nimport com.webank.wedatasphere.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClient\nimport com.webank.wedatasphere.linkis.ujes.client.request.JobExecuteAction.EngineType\nimport com.webank.wedatasphere.linkis.ujes.client.request.{JobExecuteAction, ResultSetAction}\nimport org.apache.commons.io.IOUtils\n\nobject LinkisClientImplTest extends App {\n\n  var executeCode = "show databases;"\n  var user = "hadoop"\n\n  // 1. Configure DWSClientBuilder, get a DWSClientConfig through DWSClientBuilder\n  val clientConfig = DWSClientConfigBuilder.newBuilder()\n    .addServerUrl("http://${ip}:${port}") //Specify ServerUrl, the address of the Linkis server-side gateway, such as http://{ip}:{port}\n    .connectionTimeout(30000) //connectionTimeOut client connection timeout\n    .discoveryEnabled(false).discoveryFrequency(1, TimeUnit.MINUTES) //Whether to enable registration discovery, if enabled, the newly launched Gateway will be automatically discovered\n    .loadbalancerEnabled(true) // Whether to enable load balancing, if registration discovery is not enabled, load balancing is meaningless\n    .maxConnectionSize(5) //Specify the maximum number of connections, that is, the maximum number of concurrent\n    .retryEnabled(false).readTimeout(30000) //execution failed, whether to allow retry\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy()) //AuthenticationStrategy Linkis authentication method\n    .setAuthTokenKey("${username}").setAuthTokenValue("${password}") //Authentication key, generally the user name; authentication value, generally the password corresponding to the user name\n    .setDWSVersion("v1").build() //Linkis backend protocol version, the current version is v1\n\n  // 2. Get a UJESClient through DWSClientConfig\n  val client = UJESClient(clientConfig)\n  \n  try {\n    // 3. Start code execution\n    println("user: "+ user + ", code: [" + executeCode + "]")\n    val startupMap = new java.util.HashMap[String, Any]()\n    startupMap.put("wds.linkis.yarnqueue", "default") //Startup parameter configuration\n    val jobExecuteResult = client.execute(JobExecuteAction.builder()\n      .setCreator("LinkisClient-Test") //creator, requesting the system name of the Linkis client, used for system-level isolation\n      .addExecuteCode(executeCode) //ExecutionCode The code to be executed\n      .setEngineType(EngineType.SPARK) // The execution engine type of Linkis that you want to request, such as Spark hive, etc.\n      .setStartupParams(startupMap)\n      .setUser(user).build()) //User, request user; used for user-level multi-tenant isolation\n    println("execId: "+ jobExecuteResult.getExecID + ", taskId:" + jobExecuteResult.taskID)\n    \n    // 4. Get the execution status of the script\n    var jobInfoResult = client.getJobInfo(jobExecuteResult)\n    val sleepTimeMills: Int = 1000\n    while (!jobInfoResult.isCompleted) {\n      // 5. Get the execution progress of the script\n      val progress = client.progress(jobExecuteResult)\n      val progressInfo = if (progress.getProgressInfo != null) progress.getProgressInfo.toList else List.empty\n      println("progress: "+ progress.getProgress + ", progressInfo:" + progressInfo)\n      Utils.sleepQuietly(sleepTimeMills)\n      jobInfoResult = client.getJobInfo(jobExecuteResult)\n    }\n    if (!jobInfoResult.isSucceed) {\n      println("Failed to execute job: "+ jobInfoResult.getMessage)\n      throw new Exception(jobInfoResult.getMessage)\n    }\n\n    // 6. Get the job information of the script\n    val jobInfo = client.getJobInfo(jobExecuteResult)\n    // 7. Get the list of result sets (if the user submits multiple SQL at a time, multiple result sets will be generated)\n    val resultSetList = jobInfoResult.getResultSetList(client)\n    println("All result set list:")\n    resultSetList.foreach(println)\n    val oneResultSet = jobInfo.getResultSetList(client).head\n    // 8. Get a specific result set through a result set information\n    val fileContents = client.resultSet(ResultSetAction.builder().setPath(oneResultSet).setUser(jobExecuteResult.getUser).build()).getFileContent\n    println("First fileContents: ")\n    println(fileContents)\n  } catch {\n    case e: Exception => {\n      e.printStackTrace()\n    }\n  }\n  IOUtils.closeQuietly(client)\n}\n')),(0,o.kt)("h2",{id:"3-linkis10-new-submit-interface-with-label-support"},"3. Linkis1.0 new submit interface with Label support"),(0,o.kt)("p",null,"Linkis1.0 adds the client.submit method, which is used to adapt with the new task execution interface of 1.0, and supports the input of Label and other parameters"),(0,o.kt)("h3",{id:"31-java-test-class"},"3.1 Java Test Class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.webank.wedatasphere.linkis.client.test;\n\nimport com.webank.wedatasphere.linkis.common.utils.Utils;\nimport com.webank.wedatasphere.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy;\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfig;\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfigBuilder;\nimport com.webank.wedatasphere.linkis.manager.label.constant.LabelKeyConstant;\nimport com.webank.wedatasphere.linkis.protocol.constants.TaskConstant;\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClient;\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClientImpl;\nimport com.webank.wedatasphere.linkis.ujes.client.request.JobSubmitAction;\nimport com.webank.wedatasphere.linkis.ujes.client.request.ResultSetAction;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobExecuteResult;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobInfoResult;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobProgressResult;\nimport org.apache.commons.io.IOUtils;\n\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.concurrent.TimeUnit;\n\npublic class JavaClientTest {\n\n    public static void main(String[] args){\n\n        String user = "hadoop";\n        String executeCode = "show tables";\n\n        // 1. Configure ClientBuilder and get ClientConfig\n        DWSClientConfig clientConfig = ((DWSClientConfigBuilder) (DWSClientConfigBuilder.newBuilder()\n                .addServerUrl("http://${ip}:${port}") //Specify ServerUrl, the address of the linkis server-side gateway, such as http://{ip}:{port}\n                .connectionTimeout(30000) //connectionTimeOut client connection timeout\n                .discoveryEnabled(false).discoveryFrequency(1, TimeUnit.MINUTES) //Whether to enable registration discovery, if enabled, the newly launched Gateway will be automatically discovered\n                .loadbalancerEnabled(true) // Whether to enable load balancing, if registration discovery is not enabled, load balancing is meaningless\n                .maxConnectionSize(5) //Specify the maximum number of connections, that is, the maximum number of concurrent\n                .retryEnabled(false).readTimeout(30000) //execution failed, whether to allow retry\n                .setAuthenticationStrategy(new StaticAuthenticationStrategy()) //AuthenticationStrategy Linkis authentication method\n                .setAuthTokenKey("${username}").setAuthTokenValue("${password}"))) //Authentication key, generally the user name; authentication value, generally the password corresponding to the user name\n                .setDWSVersion("v1").build(); //Linkis background protocol version, the current version is v1\n\n        // 2. Get a UJESClient through DWSClientConfig\n        UJESClient client = new UJESClientImpl(clientConfig);\n\n        try {\n            // 3. Start code execution\n            System.out.println("user: "+ user + ", code: [" + executeCode + "]");\n            Map<String, Object> startupMap = new HashMap<String, Object>();\n            // A variety of startup parameters can be stored in startupMap, see linkis management console configuration\n            startupMap.put("wds.linkis.yarnqueue", "q02");\n            //Specify Label\n            Map<String, Object> labels = new HashMap<String, Object>();\n            //Add the label that this execution depends on: EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel\n            labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "hive-1.2.1");\n            labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");\n            labels.put(LabelKeyConstant.ENGINE_RUN_TYPE_KEY, "hql");\n            //Specify source\n            Map<String, Object> source = new HashMap<String, Object>();\n            source.put(TaskConstant.SCRIPTPATH, "LinkisClient-test");\n            JobExecuteResult jobExecuteResult = client.submit( JobSubmitAction.builder()\n                    .addExecuteCode(executeCode)\n                    .setStartupParams(startupMap)\n                    .setUser(user)//Job submit user\n                    .addExecuteUser(user)//The actual execution user\n                    .setLabels(labels)\n                    .setSource(source)\n                    .build()\n            );\n            System.out.println("execId: "+ jobExecuteResult.getExecID() + ", taskId:" + jobExecuteResult.taskID());\n\n            // 4. Get the execution status of the script\n            JobInfoResult jobInfoResult = client.getJobInfo(jobExecuteResult);\n            int sleepTimeMills = 1000;\n            while(!jobInfoResult.isCompleted()) {\n                // 5. Get the execution progress of the script\n                JobProgressResult progress = client.progress(jobExecuteResult);\n                Utils.sleepQuietly(sleepTimeMills);\n                jobInfoResult = client.getJobInfo(jobExecuteResult);\n            }\n\n            // 6. Get the job information of the script\n            JobInfoResult jobInfo = client.getJobInfo(jobExecuteResult);\n            // 7. Get the list of result sets (if the user submits multiple SQL at a time, multiple result sets will be generated)\n            String resultSet = jobInfo.getResultSetList(client)[0];\n            // 8. Get a specific result set through a result set information\n            Object fileContents = client.resultSet(ResultSetAction.builder().setPath(resultSet).setUser(jobExecuteResult.getUser()).build()).getFileContent();\n            System.out.println("fileContents: "+ fileContents);\n\n        } catch (Exception e) {\n            e.printStackTrace();\n            IOUtils.closeQuietly(client);\n        }\n        IOUtils.closeQuietly(client);\n    }\n}\n\n')),(0,o.kt)("h3",{id:"32-scala-test-class"},"3.2 Scala Test Class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'package com.webank.wedatasphere.linkis.client.test\n\nimport java.util\nimport java.util.concurrent.TimeUnit\n\nimport com.webank.wedatasphere.linkis.common.utils.Utils\nimport com.webank.wedatasphere.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport com.webank.wedatasphere.linkis.manager.label.constant.LabelKeyConstant\nimport com.webank.wedatasphere.linkis.protocol.constants.TaskConstant\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClient\nimport com.webank.wedatasphere.linkis.ujes.client.request.{JobSubmitAction, ResultSetAction}\nimport org.apache.commons.io.IOUtils\n\n\nobject ScalaClientTest {\n\n  def main(args: Array[String]): Unit = {\n    val executeCode = "show tables"\n    val user = "hadoop"\n\n    // 1. Configure DWSClientBuilder, get a DWSClientConfig through DWSClientBuilder\n    val clientConfig = DWSClientConfigBuilder.newBuilder()\n      .addServerUrl("http://${ip}:${port}") //Specify ServerUrl, the address of the Linkis server-side gateway, such as http://{ip}:{port}\n      .connectionTimeout(30000) //connectionTimeOut client connection timeout\n      .discoveryEnabled(false).discoveryFrequency(1, TimeUnit.MINUTES) //Whether to enable registration discovery, if enabled, the newly launched Gateway will be automatically discovered\n      .loadbalancerEnabled(true) // Whether to enable load balancing, if registration discovery is not enabled, load balancing is meaningless\n      .maxConnectionSize(5) //Specify the maximum number of connections, that is, the maximum number of concurrent\n      .retryEnabled(false).readTimeout(30000) //execution failed, whether to allow retry\n      .setAuthenticationStrategy(new StaticAuthenticationStrategy()) //AuthenticationStrategy Linkis authentication method\n      .setAuthTokenKey("${username}").setAuthTokenValue("${password}") //Authentication key, generally the user name; authentication value, generally the password corresponding to the user name\n      .setDWSVersion("v1").build() //Linkis backend protocol version, the current version is v1\n\n    // 2. Get a UJESClient through DWSClientConfig\n    val client = UJESClient(clientConfig)\n\n    try {\n      // 3. Start code execution\n      println("user: "+ user + ", code: [" + executeCode + "]")\n      val startupMap = new java.util.HashMap[String, Any]()\n      startupMap.put("wds.linkis.yarnqueue", "q02") //Startup parameter configuration\n      //Specify Label\n      val labels: util.Map[String, Any] = new util.HashMap[String, Any]\n      //Add the label that this execution depends on, such as engineLabel\n      labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "hive-1.2.1")\n      labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE")\n      labels.put(LabelKeyConstant.ENGINE_RUN_TYPE_KEY, "hql")\n      //Specify source\n      val source: util.Map[String, Any] = new util.HashMap[String, Any]\n      source.put(TaskConstant.SCRIPTPATH, "LinkisClient-test")\n      val jobExecuteResult = client.submit(JobSubmitAction.builder\n          .addExecuteCode(executeCode)\n          .setStartupParams(startupMap)\n          .setUser(user) //Job submit user\n          .addExecuteUser(user) //The actual execution user\n          .setLabels(labels)\n          .setSource(source)\n          .build) //User, requesting user; used for user-level multi-tenant isolation\n      println("execId: "+ jobExecuteResult.getExecID + ", taskId:" + jobExecuteResult.taskID)\n\n      // 4. Get the execution status of the script\n      var jobInfoResult = client.getJobInfo(jobExecuteResult)\n      val sleepTimeMills: Int = 1000\n      while (!jobInfoResult.isCompleted) {\n        // 5. Get the execution progress of the script\n        val progress = client.progress(jobExecuteResult)\n        val progressInfo = if (progress.getProgressInfo != null) progress.getProgressInfo.toList else List.empty\n        println("progress: "+ progress.getProgress + ", progressInfo:" + progressInfo)\n        Utils.sleepQuietly(sleepTimeMills)\n        jobInfoResult = client.getJobInfo(jobExecuteResult)\n      }\n      if (!jobInfoResult.isSucceed) {\n        println("Failed to execute job: "+ jobInfoResult.getMessage)\n        throw new Exception(jobInfoResult.getMessage)\n      }\n\n      // 6. Get the job information of the script\n      val jobInfo = client.getJobInfo(jobExecuteResult)\n      // 7. Get the list of result sets (if the user submits multiple SQL at a time, multiple result sets will be generated)\n      val resultSetList = jobInfoResult.getResultSetList(client)\n      println("All result set list:")\n      resultSetList.foreach(println)\n      val oneResultSet = jobInfo.getResultSetList(client).head\n      // 8. Get a specific result set through a result set information\n      val fileContents = client.resultSet(ResultSetAction.builder().setPath(oneResultSet).setUser(jobExecuteResult.getUser).build()).getFileContent\n      println("First fileContents: ")\n      println(fileContents)\n    } catch {\n      case e: Exception => {\n        e.printStackTrace()\n      }\n    }\n    IOUtils.closeQuietly(client)\n  }\n\n}\n\n')))}d.isMDXComponent=!0}}]);