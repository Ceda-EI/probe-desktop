window.OONITranslations = {"en":{"General.AppName":"OONI Probe","Onboarding.WhatIsOONIProbe.Title":"What is OONI Probe?","Onboarding.WhatIsOONIProbe.Paragraph":"Your app for measuring internet censorship. \n\nAre websites and social media apps blocked? Is your internet connection unusually slow?\n\nRun OONI Probe to find out!","Onboarding.WhatIsOONIProbe.GotIt":"Got It","Onboarding.ThingsToKnow.Title":"Heads-up!","Onboarding.ThingsToKnow.Bullet.1":"OONI data is openly published and will include your network information. ","Onboarding.ThingsToKnow.Bullet.2":"Anyone monitoring your internet activity (e.g. government or ISP) will see that you are running OONI Probe.","Onboarding.ThingsToKnow.Bullet.3":"You might test banned websites (but you can choose which sites to test).","Onboarding.ThingsToKnow.Button":"I understand","Onboarding.ThingsToKnow.LearnMore":"Learn more","Onboarding.PopQuiz.Title":"Pop Quiz","Onboarding.PopQuiz.True":"True ","Onboarding.PopQuiz.False":"False ","Onboarding.PopQuiz.Wrong.Button.Back":"Go back","Onboarding.PopQuiz.Wrong.Button.Continue":"Continue","Onboarding.PopQuiz.1.Title":"Question 1/2","Onboarding.PopQuiz.1.Question":"If someone is monitoring my internet activity, they will see that I am running OONI Probe.","Onboarding.PopQuiz.1.Wrong.Title":"Warning","Onboarding.PopQuiz.1.Wrong.Paragraph":"OONI Probe is not a privacy tool. Anyone monitoring your internet activity will see which software you are running.","Onboarding.PopQuiz.2.Title":"Question 2/2","Onboarding.PopQuiz.2.Question":"Every time I run OONI Probe, the network data I collect will automatically get published.","Onboarding.PopQuiz.2.Wrong.Title":"Warning","Onboarding.PopQuiz.2.Wrong.Paragraph":"To increase transparency of internet censorship, the network data of all OONI Probe users is automatically published (unless they opt-out in the settings).","Onboarding.DefaultSettings.Title":"Default Settings","Onboarding.DefaultSettings.Header":"We collect and publish:","Onboarding.DefaultSettings.Bullet.1":"Country code (e.g. IT for Italy)","Onboarding.DefaultSettings.Bullet.2":"Network information (including Autonomous System Number)","Onboarding.DefaultSettings.Bullet.3":"Time & date of testing","Onboarding.DefaultSettings.Paragraph":"We do our best not to publish your IP address or any other potentially personally-identifiable information.\n\nLearn more through [OONI's Data Policy](https://ooni.io/about/data-policy/).","Onboarding.DefaultSettings.Button.Go":"Let's go","Onboarding.DefaultSettings.Button.Change":"Change defaults","Dashboard.Tab.Label":"Dashboard","Dashboard.Card.Run":"Run","Dashboard.Overview.LastRun.Never":"N/A","Dashboard.Overview.Run":"Run","Dashboard.Overview.LatestTest":"Last test:","Dashboard.Overview.Estimated":"Estimated:","Dashboard.Overview.ChooseWebsites":"Choose websites","Dashboard.Running.Running":"Running:","Dashboard.Running.EstimatedTimeLeft":"Estimated time left:","Dashboard.Running.Seconds":"{seconds} seconds","Dashboard.Running.PreparingTest":"Preparing test","Dashboard.Running.CalculatingETA":"Calculating ETA","Dashboard.Running.ShowLog":"Show Log","Dashboard.Running.CloseLog":"Close Log","Dashboard.Card.Subtitle":"Tap card for more","Dashboard.Card.Seconds":"~{seconds}s","Dashboard.Websites.Card.Description":"Test the blocking of websites","Dashboard.Websites.Overview.Paragraph":"Check whether websites are blocked using OONI's [Web Connectivity test](https://ooni.io/nettest/web-connectivity/).\n\nEvery time you tap Run, you test different websites from the Citizen Lab's [global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) and [country-specific](https://github.com/citizenlab/test-lists/tree/master/lists) test lists.\n\nTo test the sites of your choice, tap the Choose websites button or select categories of sites via the settings of this card. \n\nThis test measures whether websites are blocked by means of DNS tampering, TCP/IP blocking or by a transparent HTTP proxy.\n\nYour results will be published on [OONI Explorer](https://explorer.ooni.io/world/) and [OONI API](https://api.ooni.io/).","Dashboard.Websites.Overview.Paragraph.Desktop":"Check whether websites are blocked using OONI's [Web Connectivity test](https://ooni.io/nettest/web-connectivity/).\n\nYou will test the websites included in the Citizen Lab's [global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) and [country-specific](https://github.com/citizenlab/test-lists/tree/master/lists) test lists.\n\nThis test measures whether websites are blocked by means of DNS tampering, TCP/IP blocking or by a transparent HTTP proxy.\n\nYour results will be published on [OONI Explorer](https://explorer.ooni.org/) and [OONI API](https://api.ooni.io/).","Dashboard.Performance.Card.Description":"Test your network speed and performance","Dashboard.Performance.Overview.Paragraph":"Measure the speed and performance of your network using the [NDT](https://ooni.io/nettest/ndt/) test.\n\nMeasure video streaming performance using the [DASH](https://ooni.io/nettest/dash/) test.\n\nThese tests consume data depending on your network speed.\n\nYour results will be published on [OONI Explorer](https://explorer.ooni.io/world/) and [OONI API](https://api.ooni.io/).\n\nDisclaimer: These tests rely on third party servers. We therefore cannot guarantee that your IP address will not be collected.","Dashboard.Middleboxes.Card.Description":"Detect middleboxes in your network","Dashboard.Middleboxes.Overview.Paragraph":"Internet Service Providers often use network appliances (middleboxes) for various networking purposes (such as caching). Sometimes these middleboxes are used to implement internet censorship and/or surveillance.\n\nFind middleboxes in your network using OONI's [HTTP Invalid Request Line](https://ooni.io/nettest/http-invalid-request-line/) and [HTTP Header Field Manipulation](https://ooni.io/nettest/http-header-field-manipulation/) tests.\n\nYour results will be published on [OONI Explorer](https://explorer.ooni.io/world/) and [OONI API](https://api.ooni.io/).","Dashboard.InstantMessaging.Card.Description":"Test the blocking of instant messaging apps","Dashboard.InstantMessaging.Overview.Paragraph":"Check whether [WhatsApp](https://ooni.io/nettest/whatsapp/), [Facebook Messenger](https://ooni.io/nettest/facebook-messenger/) and [Telegram](https://ooni.io/nettest/telegram/) are blocked.\n\nYour results will be published on [OONI Explorer](https://explorer.ooni.io/world/) and [OONI API](https://api.ooni.io/).","Dashboard.Circumvention.Card.Description":"Test the blocking of censorship circumvention tools","Dashboard.Circumvention.Overview.Paragraph":"Check whether [Psiphon](https://ooni.io/nettest/psiphon/) and [Tor](https://ooni.io/nettest/tor/) are blocked.\n\nYour results will be published on [OONI Explorer](https://explorer.ooni.org/) and [OONI API](https://api.ooni.io/).","TestResults.Gbps":"Gbit/s","TestResults.Mbps":"Mbit/s","TestResults.Kbps":"kbit/s","TestResults.ms":"ms","TestResults.NotAvailable":"N/A","TestResults.UnknownASN":"Unknown","TestResults.Overview.Title":"Test Results","TestResults.Overview.Tab.Label":"Test Results","TestResults.Overview.Hero.Tests":"Tests","TestResults.Overview.Hero.Networks":"Networks","TestResults.Overview.Hero.DataUsage":"Data Usage","TestResults.Overview.FilterTests":"Filter Tests","TestResults.Overview.FilterTests.AllTests":"All Tests","TestResults.Overview.FilterTests.Websites":"Websites","TestResults.Overview.FilterTests.MiddleBoxes":"Middleboxes","TestResults.Overview.FilterTests.Performance":"Performance","TestResults.Overview.FilterTests.InstantMessaging":"Instant Messaging","TestResults.Overview.NoTestsHaveBeenRun":"No tests have been run yet. Try running one!","TestResults.Overview.Websites.Blocked.Singular":"{Count} blocked","TestResults.Overview.Websites.Blocked.Plural":"{Count} blocked","TestResults.Overview.Websites.Tested.Singular":"{Count} tested","TestResults.Overview.Websites.Tested.Plural":"{Count} tested","TestResults.Overview.MiddleBoxes.Found":"Detected","TestResults.Overview.MiddleBoxes.NotFound":"Not detected","TestResults.Overview.MiddleBoxes.Failed":"Failed","TestResults.Overview.InstantMessaging.Blocked.Singular":"{Count} blocked","TestResults.Overview.InstantMessaging.Blocked.Plural":"{Count} blocked","TestResults.Overview.InstantMessaging.Available.Singular":"{Count} accessible","TestResults.Overview.InstantMessaging.Available.Plural":"{Count} accessible","TestResults.Overview.Circumvention.Blocked.Plural":"{Count} blocked","TestResults.Overview.Circumvention.Available.Plural":"{Count} available","TestResults.Overview.IncompleteResult":"Incomplete Result","TestResults.Overview.Error":"Error","TestResults.Summary.ErrorInMeasurement":"Error in Measurement","TestResults.Summary.NoUploaded":"Results not uploaded","TestResults.Summary.Hero.DateAndTime":"Date & Time","TestResults.Summary.Hero.Network":"Network","TestResults.Summary.Hero.Country":"Country","TestResults.Summary.Hero.DataUsage":"Data Usage","TestResults.Summary.Hero.Runtime":"Total Runtime","TestResults.Summary.Hero.WiFi":"WiFi","TestResults.Summary.Hero.Mobile":"Mobile Data","TestResults.Summary.Hero.NoInternet":"No internet","TestResults.Summary.Failed":"Failed","TestResults.Summary.Websites.Hero.Tested.Singular":"Tested","TestResults.Summary.Websites.Hero.Tested.Plural":"Tested","TestResults.Summary.Websites.Hero.Blocked.Singular":"Blocked","TestResults.Summary.Websites.Hero.Blocked.Plural":"Blocked","TestResults.Summary.Websites.Hero.Sites.Singular":"Website","TestResults.Summary.Websites.Hero.Sites.Plural":"Websites","TestResults.Summary.Websites.Hero.Reachable.Singular":"Accessible","TestResults.Summary.Websites.Hero.Reachable.Plural":"Accessible","TestResults.Summary.Performance.Hero.Video":"Video","TestResults.Summary.Performance.Hero.Video.Quality":"Quality","TestResults.Summary.Performance.Hero.Upload":"Upload","TestResults.Summary.Performance.Hero.Download":"Download","TestResults.Summary.Performance.Hero.Ping":"Ping","TestResults.Summary.Middleboxes.Hero.Found":"Detected","TestResults.Summary.Middleboxes.Hero.NotFound":"Not detected","TestResults.Summary.Middleboxes.Hero.Failed":"Failed","TestResults.Summary.InstantMessaging.Hero.Tested.Singular":"Tested","TestResults.Summary.InstantMessaging.Hero.Tested.Plural":"Tested","TestResults.Summary.InstantMessaging.Hero.Blocked.Singular":"Blocked","TestResults.Summary.InstantMessaging.Hero.Blocked.Plural":"Blocked","TestResults.Summary.InstantMessaging.Hero.Reachable.Singular":"Accessible","TestResults.Summary.InstantMessaging.Hero.Reachable.Plural":"Accessible","TestResults.Summary.InstantMessaging.Hero.Apps.Singular":"App","TestResults.Summary.InstantMessaging.Hero.Apps.Plural":"Apps","TestResults.Summary.Circumvention.Hero.Tested.Singular":"Tested","TestResults.Summary.Circumvention.Hero.Tested.Plural":"Tested","TestResults.Summary.Circumvention.Hero.Blocked.Singular":"Blocked","TestResults.Summary.Circumvention.Hero.Blocked.Plural":"Blocked","TestResults.Summary.Circumvention.Hero.Reachable.Singular":"Working","TestResults.Summary.Circumvention.Hero.Reachable.Plural":"Working","TestResults.Summary.Circumvention.Hero.Tools.Singular":"Tool","TestResults.Summary.Circumvention.Hero.Tools.Plural":"Tools","TestResults.Details.Hero.Runtime":"Runtime","TestResults.Details.Methodology":"Methodology","TestResults.Details.ViewLog":"View log","TestResults.Details.RawData":"Data","TestResults.Details.CopyExplorerURL":"Copy Explorer URL","TestResults.Details.CopyToClipboard":"Copy to clipboard","TestResults.Details.ShowInExplorer":"Show in OONI Explorer","TestResults.Details.Failed.Title":"Failed","TestResults.Details.Failed.Paragraph":"You can try to run this test again","TestResults.Details.Failed.TryAgain":"Try Again","TestResults.Details.Websites.Reachable.Hero.Title":"Accessible","TestResults.Details.Websites.Reachable.Content.Paragraph":"{WebsiteURL} is accessible.","TestResults.Details.Websites.LikelyBlocked.Hero.Title":"Likely blocked","TestResults.Details.Websites.LikelyBlocked.Content.Paragraph":"{WebsiteURL} is likely blocked by means of {BlockingReason}.\n\nNote: False positives can occur. Learn more [here](https://ooni.io/nettest/web-connectivity/).","TestResults.Details.Websites.LikelyBlocked.Content.LearnToCircumvent":"Censorship Circumvention","TestResults.Details.Websites.LikelyBlocked.BlockingReason.DNS":"**DNS tampering**","TestResults.Details.Websites.LikelyBlocked.BlockingReason.TCPIP":"**TCP/IP based blocking**","TestResults.Details.Websites.LikelyBlocked.BlockingReason.HTTPDiff":"**HTTP blocking (a blockpage might be served)**","TestResults.Details.Websites.LikelyBlocked.BlockingReason.HTTPFailure":"**HTTP blocking (HTTP requests failed)**","TestResults.Details.InstantMessaging.WhatsApp.Application.Label.Title":"Mobile App","TestResults.Details.InstantMessaging.WhatsApp.Application.Label.Okay":"OK","TestResults.Details.InstantMessaging.WhatsApp.Application.Label.Failed":"Failed","TestResults.Details.InstantMessaging.WhatsApp.WebApp.Label.Title":"WhatsApp Web","TestResults.Details.InstantMessaging.WhatsApp.WebApp.Label.Okay":"OK","TestResults.Details.InstantMessaging.WhatsApp.WebApp.Label.Failed":"Failed","TestResults.Details.InstantMessaging.WhatsApp.Registrations.Label.Title":"Registration","TestResults.Details.InstantMessaging.WhatsApp.Registrations.Label.Okay":"OK","TestResults.Details.InstantMessaging.WhatsApp.Registrations.Label.Failed":"Failed","TestResults.Details.InstantMessaging.WhatsApp.Reachable.Hero.Title":"Working","TestResults.Details.InstantMessaging.WhatsApp.Reachable.Content.Paragraph":"This test successfully connected to WhatsApp's endpoints, registration service and web interface (web.whatsapp.com).","TestResults.Details.InstantMessaging.WhatsApp.LikelyBlocked.Hero.Title":"Likely blocked","TestResults.Details.InstantMessaging.WhatsApp.LikelyBlocked.Content.Paragraph":"WhatsApp appears to be blocked.","TestResults.Details.InstantMessaging.Telegram.Application.Label.Title":"Mobile App","TestResults.Details.InstantMessaging.Telegram.Application.Label.Okay":"OK","TestResults.Details.InstantMessaging.Telegram.Application.Label.Failed":"Failed","TestResults.Details.InstantMessaging.Telegram.WebApp.Label.Title":"Telegram Web","TestResults.Details.InstantMessaging.Telegram.WebApp.Label.Okay":"OK","TestResults.Details.InstantMessaging.Telegram.WebApp.Label.Failed":"Failed","TestResults.Details.InstantMessaging.Telegram.Reachable.Hero.Title":"Working","TestResults.Details.InstantMessaging.Telegram.Reachable.Content.Paragraph":"This test successfully connected to Telegram's endpoints and web interface (web.telegram.org).","TestResults.Details.InstantMessaging.Telegram.LikelyBlocked.Hero.Title":"Likely blocked","TestResults.Details.InstantMessaging.Telegram.LikelyBlocked.Content.Paragraph":"Telegram appears to be blocked.","TestResults.Details.InstantMessaging.FacebookMessenger.TCP.Label.Title":"TCP connections","TestResults.Details.InstantMessaging.FacebookMessenger.TCP.Label.Okay":"OK","TestResults.Details.InstantMessaging.FacebookMessenger.TCP.Label.Failed":"Failed","TestResults.Details.InstantMessaging.FacebookMessenger.DNS.Label.Title":"DNS lookups","TestResults.Details.InstantMessaging.FacebookMessenger.DNS.Label.Okay":"OK","TestResults.Details.InstantMessaging.FacebookMessenger.DNS.Label.Failed":"Failed","TestResults.Details.InstantMessaging.FacebookMessenger.Reachable.Hero.Title":"Working","TestResults.Details.InstantMessaging.FacebookMessenger.Reachable.Content.Paragraph":"This test successfully connected to Facebook's endpoints and resolved to Facebook IP addresses.","TestResults.Details.InstantMessaging.FacebookMessenger.LikelyBlocked.Hero.Title":"Likely blocked","TestResults.Details.InstantMessaging.FacebookMessenger.LikelyBlocked.Content.Paragraph":"Facebook Messenger appears to be blocked.","TestResults.Details.Middleboxes.HTTPInvalidRequestLine.NotFound.Hero.Title":"No middleboxes detected","TestResults.Details.Middleboxes.HTTPInvalidRequestLine.NotFound.Content.Paragraph":"No network anomaly was detected when communicating with our servers. ","TestResults.Details.Middleboxes.HTTPInvalidRequestLine.Found.Hero.Title":"Network tampering","TestResults.Details.Middleboxes.HTTPInvalidRequestLine.Found.Content.Paragraph":"Network traffic was manipulated when contacting our control servers.\n\nThis means that there may be a middlebox in your network, which could be responsible for censorship and/or surveillance.","TestResults.Details.Middleboxes.HTTPHeaderFieldManipulation.NotFound.Hero.Title":"No middleboxes detected","TestResults.Details.Middleboxes.HTTPHeaderFieldManipulation.NotFound.Content.Paragraph":"No network anomaly was detected when communicating with our servers. ","TestResults.Details.Middleboxes.HTTPHeaderFieldManipulation.Found.Hero.Title":"Network tampering","TestResults.Details.Middleboxes.HTTPHeaderFieldManipulation.Found.Content.Paragraph":"Network traffic was manipulated when contacting our control servers.\n\nThis means that there may be a middlebox in your network, which could be responsible for censorship and/or surveillance.","TestResults.Details.Middleboxes.HTTPInvalidRequestLine.YouSent":"You Sent","TestResults.Details.Middleboxes.HTTPInvalidRequestLine.YouReceived":"You Received","TestResults.Details.Performance.NDT.Upload":"Upload","TestResults.Details.Performance.NDT.Download":"Download","TestResults.Details.Performance.NDT.Ping":"Ping","TestResults.Details.Performance.NDT.Server":"Server","TestResults.Details.Performance.NDT.PacketLoss":"Packet Loss ","TestResults.Details.Performance.NDT.OutOfOrder":"Out of Order","TestResults.Details.Performance.NDT.AveragePing":"Average Ping","TestResults.Details.Performance.NDT.MaxPing":"Max Ping","TestResults.Details.Performance.NDT.MSS":"MSS","TestResults.Details.Performance.NDT.Timeouts":"Timeouts","TestResults.Details.Performance.Dash.VideoWithoutBuffering":"You can stream up to {VideoQuality} without buffering.","TestResults.Details.Performance.Dash.MedianBitrate":"Median Bitrate","TestResults.Details.Performance.Dash.PlayoutDelay":"Playout Delay","TestResults.Details.Circumvention.Psiphon.Blocked.Hero.Title":"Likely blocked","TestResults.Details.Circumvention.Psiphon.Reachable.Hero.Title":"Working","TestResults.Details.Circumvention.Psiphon.Blocked.Content.Paragraph":"[Psiphon](https://psiphon.ca/) appears to be blocked.","TestResults.Details.Circumvention.Psiphon.Reachable.Content.Paragraph":"We were able to successfully bootstrap a Psiphon connection. This means that [Psiphon](https://psiphon.ca/) should work.","TestResults.Details.Circumvention.Psiphon.BootstrapTime.Label.Title":"Bootstrap Time","TestResults.Details.Circumvention.Psiphon.BootstrapTime.Unit":"s","TestResults.Details.Circumvention.Tor.Blocked.Hero.Title":"Likely blocked","TestResults.Details.Circumvention.Tor.Reachable.Hero.Title":"Working","TestResults.Details.Circumvention.Tor.Blocked.Content.Paragraph":"[Tor](https://www.torproject.org/) appears to be blocked.","TestResults.Details.Circumvention.Tor.Reachable.Content.Paragraph":"We were able to successfully connect to the default Tor bridges and/or Tor directory authorities. This means that [Tor](https://www.torproject.org/) should work.","TestResults.Details.Circumvention.Tor.BrowserBridges.Label.Title":"Default Bridges","TestResults.Details.Circumvention.Tor.BrowserBridges.Label.OK":"{bridgesAccessible}/{bridgesTotal} OK","TestResults.Details.Circumvention.Tor.DirectoryAuthorities.Label.Title":"Directory Authorities","TestResults.Details.Circumvention.Tor.DirectoryAuthorities.Label.OK":"{dirAuthAccessible}/{dirAuthTotal} OK","TestResults.Details.Circumvention.Tor.Table.Header.Name":"Name","TestResults.Details.Circumvention.Tor.Table.Header.Address":"Address","TestResults.Details.Circumvention.Tor.Table.Header.Type":"Type","TestResults.Details.Circumvention.Tor.Table.Header.Connect":"Connect","TestResults.Details.Circumvention.Tor.Table.Header.Handshake":"Handshake","Feed.Tab.Label":"Feed","Feed.Title":"Feed","Modal.OK":"OK","Modal.Cancel":"Cancel","Modal.Delete":"Delete","Modal.Error":"Error","Modal.Retry":"Retry","Modal.Error.NoInternet":"Unable to run the test. Please check your internet connectivity.","Modal.Error.CantDownloadURLs":"Unable to download URL list. Please try again.","Modal.Error.NotificationNotEnabled":"Notification permissions are required. Please enable them in the Settings of your phone and then enable them in your OONI Probe app.","Modal.Error.NotificationNotEnabled.GoToSettings":"Go to the Settings","Modal.Error.CantCloseScreen":"This screen is locked while a test is running.","Modal.Error.RawDataNoInternet":"You need to be connected to the internet to download the raw measurement data.","Modal.ResultsNotUploaded.Title":"Results not uploaded","Modal.ResultsNotUploaded.Paragraph":"Some of your test results have not been uploaded to OONI servers. If you'd like to contribute to OONI's dataset, please upload them.","Modal.ResultsNotUploaded.Button.Upload":"Upload","Modal.ResultsNotUploaded.Uploading":"Uploading {testNumber} ...","Toast.ResultsUploaded":"Upload successful","Modal.DisplayFailureLog":"Display failure log","Modal.EnableNotifications.AutomatedTesting":"Enable notification permissions to run tests automatically.","Modal.EnableNotifications.News":"Enable notification permissions to receive news updates.","Modal.EnableNotifications.Any":"Enable notification permissions to receive push notifications.","Modal.EnableGPS":"To improve the accuracy of tests, we need GPS permissions. OONI will only collect an approximation of your GPS position.","Modal.DoYouWantToDeleteAllTests":"Do you want to delete all test results?","Modal.DoYouWantToDeleteThisTest":"Do you want to delete this test?","Modal.EnableAtLeastOneTest":"Please enable at least one test","Modal.OnlyDigits":"Please insert only digits in this field.","Modal.ReRun.Title":"Re-run test","Modal.ReRun.Paragraph":"This test has failed. Re-run the test?","Modal.ReRun.Websites.Title":"You are about to re-test {websitesNumber} websites.","Modal.ReRun.Websites.Run":"Run","Modal.CustomURL.NotSaved":"Your URLs will not be saved when you leave this screen. Are you sure you want to leave this screen?","Modal.ManualUpload.Title":"Enable Manual Upload?","Modal.ManualUpload.Paragraph":"This setting allows you to manually re-upload unpublished measurements.","Modal.ManualUpload.Enable":"Enable","Modal.ManualUpload.Disable":"No, thanks","Modal.UploadFailed.Title":"Upload failed","Modal.UploadFailed.Paragraph":"We have failed to upload {numberFailed}/{totalUploads} measurements. The failure log has been shared with OONI developers.","Modal.Error.LogNotFound":"Log file not found","Modal.Error.NoValidUrls":"No valid URLs found","Modal.Error.JsonEmpty":"JSON empty","Toast.CopiedToClipboard":"Copied to clipboard","Snackbar.ResultsNotUploaded.Text":"Not uploaded","Snackbar.ResultsNotUploaded.Upload":"Upload","Snackbar.ResultsSomeNotUploaded.Text":"Some not uploaded","Snackbar.ResultsSomeNotUploaded.UploadAll":"Upload All","Test.Websites.Fullname":"Websites","Test.InstantMessaging.Fullname":"Instant Messaging","Test.Middleboxes.Fullname":"Middleboxes","Test.Performance.Fullname":"Performance","Test.Circumvention.Fullname":"Circumvention","Test.HTTPInvalidRequestLine.Fullname":"HTTP Invalid Request Line Test","Test.HTTPHeaderFieldManipulation.Fullname":"HTTP Header Field Manipulation Test","Test.WebConnectivity.Fullname":"Web Connectivity Test","Test.NDT.Fullname":"NDT Speed Test","Test.Dash.Fullname":"DASH Streaming Test","Test.WhatsApp.Fullname":"WhatsApp Test","Test.Telegram.Fullname":"Telegram Test","Test.FacebookMessenger.Fullname":"Facebook Messenger Test","Test.Psiphon.Fullname":"Psiphon Test","Test.Tor.Fullname":"Tor Test","Settings.Title":"Settings","Settings.Error.TestDurationTooLow":"The amount of time you have set for the test duration is too low.","Settings.About.Label":"About OONI","Settings.About.Content.Paragraph":"The Open Observatory of Network Interference (OONI) is a free software project under The Tor Project that aims to increase transparency of internet censorship around the world.\n\nSince 2012, OONI's global community has been measuring networks in more than 200 countries. Some of these measurements serve as evidence of internet censorship.","Settings.About.Content.LearnMore":"Learn more","Settings.About.Content.DataPolicy":"OONI Data Policy","Settings.Notifications.Label":"Notifications","Settings.Notifications.Enabled":"Enabled","Settings.Notifications.OnTestCompletion":"Notify upon test completion","Settings.Notifications.OnNews":"News Feed","Settings.Sharing.Label":"Sharing","Settings.Sharing.UploadResults":"Automatically Publish Results","Settings.Sharing.UploadResultsManually":"Manual Result Upload","Settings.Sharing.IncludeNetwork":"Include Network Info","Settings.Sharing.GPS":"Include approximate geo-location","Settings.Sharing.IncludeIP":"Include my IP address","Settings.Sharing.IncludeCountryCode":"Include Country Code","Settings.Sharing.IncludeCountryCode.PopUp":"This information (e.g. IT for Italy) is required to identify which country the measurements are collected from. Are you sure you want to disable this option? ","Settings.Sharing.Footer":"By publishing results, you are increasing transparency of network interference and supporting the OONI community. \n\nNetwork information (i.e. Autonomous System Number) is required for identifying Internet Service Providers.","Settings.TestOptions.Label":"Test options","Settings.Advanced.Label":"Advanced","Settings.Advanced.SendCrashReports":"Send crash reports","Settings.Advanced.DebugLogs":"Debug logs","Settings.Advanced.UseDomainFronting":"Always use domain fronting","Settings.Websites.MaxRuntimeEnabled":"Limit test duration","Settings.Websites.MaxRuntime":"Test duration","Settings.Websites.Categories.Label":"Website categories to test","Settings.Websites.Categories.Description":"{Count} categories enabled","Settings.Websites.CustomURL.Title":"Choose websites to test","Settings.Websites.CustomURL.URL":"URL","Settings.Websites.CustomURL.NoURLEntered":"No URLs entered","Settings.Websites.CustomURL.Run":"Run","Settings.Websites.CustomURL.Add":"Add website","Settings.InstantMessaging.TestWhatsApp":"Test WhatsApp","Settings.InstantMessaging.WhatsAppExtensiveTesting":"Test all WhatsApp endpoints","Settings.InstantMessaging.TestTelegram":"Test Telegram","Settings.InstantMessaging.TestFacebookMessenger":"Test Facebook Messenger","Settings.Middleboxes.TestHTTPInvalidRequestLine":"Run the HTTP Invalid Request Line Test","Settings.Middleboxes.TestHTTPHeaderFieldManipulation":"Run the HTTP Header Field Manipulation Test","Settings.Performance.TestNDT":"Run the NDT Speed Test","Settings.Performance.NDTAutomaticServerSelection":"Automatic NDT server selection","Settings.Performance.NDTServerAddress":"NDT server address","Settings.Performance.NDTServerPort":"NDT server port","Settings.Performance.TestDash":"Run the DASH Streaming Test","Settings.Performance.DashAutomaticServerSelection":"Automatic DASH server selection","Settings.Performance.DashServerAddress":"DASH server","Settings.Performance.DashServerPort":"DASH server port","Settings.SendEmail.Label":"Send email to support","Settings.SendEmail.Error":"Please send an email to bugs@openobservatory.org with information on the app and iOS version. Tap \"Copy to clipboard\" below to copy our email address.","Notification.FinishedRunning":"Finished running","OONIBrowser.TryMirror":"Try mirror","OONIBrowser.Loading":"Loading...","OONIBrowser.Error":"An unexpected error occurred. Please reload this page.","OONIRun.YouAreAboutToRun":"You are about to run an OONI Probe test.","OONIRun.URLs":"{Count} URLs","OONIRun.TestName":"Test Name","OONIRun.TestDetails":"Test Details","OONIRun.Run":"Run","OONIRun.OONIProbeOutOfDate":"Out of date","OONIRun.OONIProbeNewerVersion":"You need a newer version of OONI Probe to run this test.","OONIRun.Update":"Update","OONIRun.Close":"Close","OONIRun.InvalidParameter":"Invalid parameter","OONIRun.InvalidParameter.Msg":"The OONI Run link is either malformed or your app is out of date.","OONIRun.RandomSamplingOfURLs":"You will test a random sample of websites. ","OONIRun.TestRunningError":"Please wait for the test to finish running before tapping on an OONI Run link.","CategoryCode.ALDR.Name":"Drugs & Alcohol","CategoryCode.REL.Name":"Religion","CategoryCode.PORN.Name":"Pornography","CategoryCode.PROV.Name":"Provocative Attire","CategoryCode.POLR.Name":"Political Criticism","CategoryCode.HUMR.Name":"Human Rights Issues","CategoryCode.ENV.Name":"Environment","CategoryCode.MILX.Name":"Terrorism and Militants","CategoryCode.HATE.Name":"Hate Speech","CategoryCode.NEWS.Name":"News Media","CategoryCode.XED.Name":"Sex Education","CategoryCode.PUBH.Name":"Public Health","CategoryCode.GMB.Name":"Gambling","CategoryCode.ANON.Name":"Circumvention tools","CategoryCode.DATE.Name":"Online Dating","CategoryCode.GRP.Name":"Social Networking","CategoryCode.LGBT.Name":"LGBTQ+","CategoryCode.FILE.Name":"File-sharing","CategoryCode.HACK.Name":"Hacking Tools","CategoryCode.COMT.Name":"Communication Tools","CategoryCode.MMED.Name":"Media sharing","CategoryCode.HOST.Name":"Hosting and Blogging","CategoryCode.SRCH.Name":"Search Engines","CategoryCode.GAME.Name":"Gaming","CategoryCode.CULTR.Name":"Culture","CategoryCode.ECON.Name":"Economics","CategoryCode.GOVT.Name":"Government","CategoryCode.COMM.Name":"E-commerce","CategoryCode.CTRL.Name":"Control content","CategoryCode.IGO.Name":"Intergovernmental Orgs.","CategoryCode.MISC.Name":"Miscellaneous content","CategoryCode.ALDR.Description":"Use and sale of drugs and alcohol","CategoryCode.REL.Description":"Religious issues, both supportive and critical","CategoryCode.PORN.Description":"Hard-core and soft-core pornography","CategoryCode.PROV.Description":"Provocative attire and portrayal of women wearing minimal clothing","CategoryCode.POLR.Description":"Critical political viewpoints","CategoryCode.HUMR.Description":"Human rights issues","CategoryCode.ENV.Description":"Discussions on environmental issues","CategoryCode.MILX.Description":"Terrorism, violent militant or separatist movements","CategoryCode.HATE.Description":"Disparaging of particular groups based on race, sex, sexuality or other characteristics","CategoryCode.NEWS.Description":"Major news websites, regional news outlets and independent media","CategoryCode.XED.Description":"Sexual health issues including contraception, STD's, rape prevention and abortion","CategoryCode.PUBH.Description":"Public health issues including HIV, SARS, bird flu, World Health Organization","CategoryCode.GMB.Description":"Online gambling and betting","CategoryCode.ANON.Description":"Anonymization, censorship circumvention and encryption","CategoryCode.DATE.Description":"Online dating sites","CategoryCode.GRP.Description":"Online social networking tools and platforms","CategoryCode.LGBT.Description":"LGBTQ+ communities discussing related issues (excluding pornography)","CategoryCode.FILE.Description":"File sharing including cloud-based file storage, torrents and P2P","CategoryCode.HACK.Description":"Computer security tools and news","CategoryCode.COMT.Description":"Individual and group communication tools including VoIP, messaging and webmail","CategoryCode.MMED.Description":"Video, audio and photo sharing","CategoryCode.HOST.Description":"Web hosting, blogging and other online publishing","CategoryCode.SRCH.Description":"Search engines and portals","CategoryCode.GAME.Description":"Online games and gaming platforms (excluding gambling sites)","CategoryCode.CULTR.Description":"Entertainment including history, literature, music, film, satire and humour","CategoryCode.ECON.Description":"General economic development and poverty","CategoryCode.GOVT.Description":"Government-run websites, including military","CategoryCode.COMM.Description":"Commercial services and products","CategoryCode.CTRL.Description":"Benign or innocuous content used for control","CategoryCode.IGO.Description":"Intergovernmental organizations including The United Nations","CategoryCode.MISC.Description":"Sites that haven't been categorized yet"}}