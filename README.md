# react-email-input

React Email Input provides dropdown having mailserver names and top level domains to pick and help in typing email faster and easier
Email Input for ReactJS for better UX


|  Prop    |  Type             | Default                |   Description               |
|----------|-------------------|----------------------- |-----------------------------|
| value    |       string      |          ""	        |Default value of the input component	          |
| onChange |       Function    |          undefined	    |onChange handler for the input component	          |
| tlds     |       string[]	   |["com", "net", "org", "in", "uk"]	        |            top level domains that are shown after user enters "@" in the inupt field          |
| mails    |       string[]	   |["gmail", "baidu", "yahoo", "hotmail"]	        |            mails that are shown after user enters "." in the inupt field          |
| buttonClassName |       string      |          ""	        | className for the ListButton component	          |
| buttonStyle |       React.CSSProperties|          {}	        | style for the ListButton component	          |
| listClassName |       string      |          ""	        | className for the List component	          |
| listStyle |       React.CSSProperties|          {}	        | style for the List component	          |
| ...rest |       InputProps |          {}	        | Rest HTML Input Props excluding type and inputMode |
