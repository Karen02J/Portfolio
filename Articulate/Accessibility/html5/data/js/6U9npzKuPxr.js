window.globalProvideData('slide', '{"title":"Question 2 \\nBuild a heading structure based on the headings already in place","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":3,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide3","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0x37A6A6","alpha":100,"stop":0}]}},"id":"6U9npzKuPxr","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"eval_interaction","id":"_this.6JfqSG4yPWa"}]},"ReviewInt_6PUol6x0w6G":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6JfqSG4yPWa.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6PUol6x0w6G_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6PUol6x0w6G_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6PUol6x0w6G","typea":"var","valueb":"6bHk29KQeoI","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000100001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6bHk29KQeoI.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6PUol6x0w6G"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6bHk29KQeoI.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6PUol6x0w6G"}]}]},{"kind":"set_enabled","objRef":{"type":"string","value":"list_6PUol6x0w6G"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_6PUol6x0w6G":{"kind":"actiongroup","actions":[{"kind":"set_review","objRef":{"type":"string","value":"list_6PUol6x0w6G"},"enabled":{"type":"boolean","value":true}}]},"AnsweredInt_6PUol6x0w6G":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6PUol6x0w6G"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000100001"}]},{"kind":"set_enabled","objRef":{"type":"string","value":"list_6PUol6x0w6G"},"enabled":{"type":"boolean","value":false}}]},"DisableChoices_6PUol6x0w6G":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"list_6PUol6x0w6G"},"enabled":{"type":"boolean","value":false}}]},"6PUol6x0w6G_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6JfqSG4yPWa.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6bHk29KQeoI.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6PUol6x0w6G"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6JfqSG4yPWa.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6JfqSG4yPWa.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6PUol6x0w6G"}]}]}]}]},"SetLayout_pxabnsnfns00000100001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000100001"}]}]},"NavigationRestrictionNextSlide_6U9npzKuPxr":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.60usTmpRDcJ"}}]},"NavigationRestrictionPreviousSlide_6U9npzKuPxr":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000100001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6kbdY0NfW4P","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6kbdY0NfW4P","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6PUol6x0w6G","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6PUol6x0w6G"}],"elseActions":[{"kind":"exe_actiongroup","id":"6PUol6x0w6G_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6PUol6x0w6G","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6PUol6x0w6G","typea":"var","valueb":"6bHk29KQeoI","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6bHk29KQeoI"},"completed_slide_ref":{"type":"string","value":"_player.6NkhhYCdMbb.6LUSoulOdhB"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6PUol6x0w6G","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6PUol6x0w6G","typea":"var","valueb":"6bHk29KQeoI","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6bHk29KQeoI"},"completed_slide_ref":{"type":"string","value":"_player.6NkhhYCdMbb.6LUSoulOdhB"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6U9npzKuPxr"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6U9npzKuPxr"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"list_6PUol6x0w6G"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KD5fpLr424"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KLqQZuQvTk"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6UNnS3xngwu"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5qpmiyzGEve"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":20,"yPos":16,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":338,"rotateYPos":251,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-5,"top":-5,"right":681,"bottom":507,"altText":"Round Diagonal Corner 1","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":0,"yPos":0,"width":676,"height":502,"strokewidth":8}},"width":676,"height":502,"resume":true,"useHandCursor":true,"id":"5qpmiyzGEve"},{"kind":"sequencectrl","rtl":false,"shapemaskId":"","xPos":36,"yPos":230,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":71,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"number_text","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}},{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"itemlist":[{"kind":"item","itemdata":"choices.choice_6JxLFKmi3Iw","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6JxLFKmi3Iw","type":"vectortext","altText":"Heading 4","lmstext":"Heading 4","xPos":10,"yPos":4,"xAccOffset":0,"yAccOffset":0,"width":594,"height":28,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":73,"bottom":19,"altText":"Heading 4","lmstext":"Heading 4","pngfb":false,"pr":{"l":"Lib","i":276}}}},{"kind":"item","itemdata":"choices.choice_60ZMkNRiUv2","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_60ZMkNRiUv2","type":"vectortext","altText":"Heading 3","lmstext":"Heading 3","xPos":10,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":594,"height":28,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":86,"bottom":23,"altText":"Heading 3","lmstext":"Heading 3","pngfb":false,"pr":{"l":"Lib","i":517}}}},{"kind":"item","itemdata":"choices.choice_6i03TZaUFHq","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6i03TZaUFHq","type":"vectortext","altText":"Heading 2","lmstext":"Heading 2","xPos":10,"yPos":4,"xAccOffset":0,"yAccOffset":0,"width":594,"height":28,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":73,"bottom":19,"altText":"Heading 2","lmstext":"Heading 2","pngfb":false,"pr":{"l":"Lib","i":274}}}}]},"width":648,"height":142,"resume":true,"useHandCursor":true,"id":"list_6PUol6x0w6G"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6KD5fpLr424_1999139638","id":"01","linkId":"txt__default_6KD5fpLr424","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":585,"height":83,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Question 2 \\n","style":{"fontFamily":"\\"ArialBold Charset0_Bold3D70FAD3\\",\\"Arial\\"","fontSize":18,"fontIsBold":false,"ascent":21.727,"descent":5.086,"leading":0.785,"underlinePosition":-2.543,"underlineThickness":2.52,"xHeight":12.445}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":12,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"Build a heading structure based on the headings already in place","style":{"fontFamily":"\\"ArialBold Charset0_Bold3D70FAD3\\",\\"Arial\\"","fontSize":18,"fontIsBold":false,"ascent":21.727,"descent":5.086,"leading":0.785,"underlinePosition":-2.543,"underlineThickness":2.52,"xHeight":12.445}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":64,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":24,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":573,"bottom":89,"pngfb":false,"pr":{"l":"Lib","i":519}}}],"shapemaskId":"","xPos":60,"yPos":22,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":302.5,"rotateYPos":46.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":605,"bottom":93,"altText":"Question 2 \\nBuild a heading structure based on the headings already in place","pngfb":false,"pr":{"l":"Lib","i":518}},"html5data":{"xPos":0,"yPos":0,"width":605,"height":93,"strokewidth":0}},"width":605,"height":93,"resume":true,"useHandCursor":true,"id":"6KD5fpLr424"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6KLqQZuQvTk_-949148770","id":"01","linkId":"txt__default_6KLqQZuQvTk","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":205,"height":92,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Heading 1\\n","style":{"fontFamily":"\\"Arial Charset0_v8wz5YMo9EE9FF07\\",\\"Arial\\"","ascent":14.484,"descent":3.391,"leading":0.523,"underlinePosition":-1.695,"underlineThickness":1.172,"xHeight":8.297}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":10,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"\\n","style":{"fontFamily":"\\"Arial Charset0_v8wz5YMo9EE9FF07\\",\\"Arial\\"","ascent":14.484,"descent":3.391,"leading":0.523,"underlinePosition":-1.695,"underlineThickness":1.172,"xHeight":8.297}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":1,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"Heading 2\\n","style":{"fontFamily":"\\"Arial Charset0_v8wz5YMo9EE9FF07\\",\\"Arial\\"","ascent":14.484,"descent":3.391,"leading":0.523,"underlinePosition":-1.695,"underlineThickness":1.172,"xHeight":8.297}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":10,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"\\n","style":{"fontFamily":"\\"Arial Charset0_v8wz5YMo9EE9FF07\\",\\"Arial\\"","ascent":14.484,"descent":3.391,"leading":0.523,"underlinePosition":-1.695,"underlineThickness":1.172,"xHeight":8.297}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":1,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"Heading 3","style":{"fontFamily":"\\"Arial Charset0_v8wz5YMo9EE9FF07\\",\\"Arial\\"","ascent":14.484,"descent":3.391,"leading":0.523,"underlinePosition":-1.695,"underlineThickness":1.172,"xHeight":8.297}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":9,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":83,"bottom":98,"pngfb":false,"pr":{"l":"Lib","i":521}}}],"shapemaskId":"","xPos":72,"yPos":128,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":112.5,"rotateYPos":51,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":225,"bottom":102,"altText":"Heading 1\\n\\nHeading 2\\n\\nHeading 3","pngfb":false,"pr":{"l":"Lib","i":520}},"html5data":{"xPos":0,"yPos":0,"width":225,"height":102,"strokewidth":0}},"width":225,"height":102,"resume":true,"useHandCursor":true,"id":"6KLqQZuQvTk"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6UNnS3xngwu_38293321","id":"01","linkId":"txt__default_6UNnS3xngwu","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":205,"height":22,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Heading 1","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":9,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":86,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":523}}}],"shapemaskId":"","xPos":72,"yPos":372,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":112.5,"rotateYPos":16,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":225,"bottom":32,"altText":"Heading 1","pngfb":false,"pr":{"l":"Lib","i":522}},"html5data":{"xPos":0,"yPos":0,"width":225,"height":32,"strokewidth":0}},"width":225,"height":32,"resume":true,"useHandCursor":true,"id":"6UNnS3xngwu"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6PUol6x0w6G_CorrectReview","id":"01","linkId":"6PUol6x0w6G_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":401,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":162}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":161}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6PUol6x0w6G_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6PUol6x0w6G_IncorrectReview","id":"01","linkId":"6PUol6x0w6G_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":409,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":164}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":163}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6PUol6x0w6G_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');