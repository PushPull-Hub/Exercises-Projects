const os = require('os');

// CPU architecture
const CpuArch = os.arch();
// console.log(CpuArch);

const constans = os.constants;
// console.log(constans);

const CPU_CORE = os.cpus();
// console.log(CPU_CORE);

const FREE_MEMORY = os.freemem();
// console.log(FREE_MEMORY);

const TOTAL_MEMORY = os.totalmem();
// console.log(TOTAL_MEMORY);

const HOME_DIRECTORY = os.homedir();
// console.log(HOME_DIRECTORY);

const HOST_NAME = os.hostname();
// console.log(HOST_NAME);

const PLATFORM = os.platform();
// console.log(PLATFORM);

const UP_TIME = os.uptime();
// console.log(UP_TIME);

const USER_INFO = os.userInfo();
// console.log(USER_INFO);
