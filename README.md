#User Guide

### FE
 After open the project, open a new terminal and type in or copy one of following commands:\
 ********************************\
 npm start\
  or\
 npm start --port 3000 || (notice: since there might some feature need to config for csrf problem, better run at port 3000) \
 ********************************\

### BE (We use JSON fake-api to simulate the backend, our default config run at port 8080)\
open new terminal and move to /src/db before run:\
double check if your current path is /src/db:\
Copy or type in terminal this command then press enter:\
********************************\
npx json-server fake-api.json --port 8080\

********************************\