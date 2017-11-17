#!/usr/bash

rsync -avz --exclude=/.git/ ./ sysadmin@131.104.180.35:/home/sysadmin/test/

