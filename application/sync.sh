#!/usr/bash

# rsync -avz ./ gdouglas@portkey.socs.uoguelph.ca:/testing/
rsync -azv -e 'ssh -o "ProxyCommand ssh gdouglas@portkey.socs.uoguelph.ca -W %h:%p"' . sysadmin@131.104.180.35:test/
