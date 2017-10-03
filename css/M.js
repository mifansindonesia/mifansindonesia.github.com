			var miy="Mi";
			var msg="Fans Indonesia                                                            ";
			var speed=500;
			function scroll_title() {
					document.title=miy+msg;
					msg=msg.substring(1,msg.length)+msg.charAt(0);
					setTimeout("scroll_title()",speed);
			}
			scroll_title();
