
				var deftext = "##Here we are \n*This* is what writing in Markdown looks like. \nSimple text, no fuss. \n**Try me!**\n"
				var opts = {
				  container: 'epiceditor',
				  textarea: null,
				  basePath: 'public/epiceditor',
				  clientSideStorage: true,
				  localStorageName: 'epiceditor',
				  useNativeFullscreen: true,
				  parser: marked,
				  file: {
				    name: 'epiceditor',
				    defaultContent: deftext,
				    autoSave: 100
				  },
				  theme: {
				    base: '/themes/base/epiceditor.css',
				    preview: '/themes/preview/github.css',
				    editor: '/themes/editor/epic-dark.css'
				  },
				  button: {
				    preview: true,
				    fullscreen: true
				  },
				  focusOnLoad: false,
				  shortcut: {
				    modifier: 18,
				    fullscreen: 70,
				    preview: 80
				  },
				  string: {
				    togglePreview: 'Toggle Preview Mode',
				    toggleEdit: 'Toggle Edit Mode',
				    toggleFullscreen: 'Enter Fullscreen'
				  }
				}

				var editor = new EpicEditor(opts).load(function(){console.log("Editor loaded.")});