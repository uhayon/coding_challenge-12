const inputExample = String.raw`/->-\
|   |  /----\
| /-+--+-\  |
| | |  | v  |
\-+-/  \-+--/
  \------/   `;

const input = String.raw`                                /---------------------------------------------------------------------------------------\
       /------------------------+-------------------------\                           /-------------------------------\ |
      /+-----------\            |/------------------------+------------------------<--+-------------------------------+-+-\
      ||          /+------------++------------------------+---------------------------+\  /---------------------------+-+-+-------------\
      ||          ||            ||        /---------------+---------------------------++--+---------------------------+-+-+\            |
      ||/---------++------------++--------+---------------+---------------------------++--+-----------------------\  /+-+-++------------+-\
      |||         ||   /--------++-------\|/--------------+---------------------------++--+-----------------\     |  || | ||            | |
      |||         ||   |        ||       |||              |                           ||  |                 |     |  || | ||            | |
      |||         ||   |        ||    /--+++--------------+----\                      ||  |                 |     |  || | ||    /-------+-+----\
      |||         ||   |        ||  /-+--+++--------------+----+----------------------++--+-----------\     |     |  || | ||    |       | |    |
      |||         ||   |      /-++--+-+--+++--------------+----+--------\             ||  |           |     |     |  || | ||    |     /-+-+----+-----\
    /-+++---------++---+------+-++--+-+--+++----------\   |    |        |             ||  |           |     |     |  || | ||    |     | | |    |     |
/---+-+++---------++---+\     | ||  | |  |||          |   |    |        |             ||  |           |/----+-----+--++-+-++---\|     | | |    |     |
|  /+-+++---------++---++-----+-++--+-+--+++----------+---+----+--------+-------------++-\|           ||    |     |  || | ||   ||     | | |    |     |
|  || |||         ||   ||     | |\--+-+--+++----------+---+----+--------+-------------++-++-----------++----+-----+--++-+-/|   ||     | | |    |     |
|  || |||         ||   ||   /-+-+---+-+--+++---------\|   |    |        |             || ||           ||    |     |  || |  |   ||     | | |    |     |
|  || |||       /-++---++---+-+-+---+-+--+++---------++---+----+--------+-------------++-++-----------++\   |     |  || |  |   ||     | | |    |     |
|  || |||       | ||  /++---+-+-+---+-+--+++---------++\  |    |       /+-------------++-++---------\ |||   |     |  || |  |   ||     | | |    |     |
|  || |||       | ||  |||   | | |   | |  |||         |||  |    |       ||             ||/++---------+-+++---+-----+--++-+--+---++-----+-+\|    |     |
|  || |||       | ||  |||   | | |   | |  |||         |||  |    |       ||             |||||  /------+-+++---+-----+--++-+\ |   ||     | |||    |     |
|  || |||       | ||  |||   | | |   | |  |||      /--+++--+----+-------++-------------+++++--+------+-+++---+-----+\ || || |   v|     | |||    |     |
|  || |||   /---+-++--+++---+-+-+---+-+--+++------+--+++--+----+-------++-------------+++++--+------+-+++\  |     || || || |   ||     | |||    |     |
|  || |||   |   | ||  |||   | | |   | \--+++------+--+++--+----/       ||            /+++++--+--\   | ||||  |    /++-++-++-+---++-----+-+++-\  |     |
|  || |||   |   | ||/-+++---+-+-+---+----+++------+--+++--+------------++---------\  ||||||  |  |   | ||||  |    ||| || || |   ||     | ||| |  |     |
|  || |||   |   | ||| |||   | | |   |    |||  /---+--+++--+----\       ||         |  ||||||  |  |   | ||||  |    ||| || || |   ||     | ||| |  |     |
|  || |||   |   | ||| |||   | | |   |    |||  |   |  |||  |    |       || /-------+--++++++--+--+---+-++++--+----+++-++-++-+---++--\  | ||| |  |     |
|  || \++---+---+-+/| |||   | | |   |    |||  |   |  |^|  |    |       || |       |  ||||||  |  |   | ||||  |    ||| || || |   ||  |  | ||| |  |     |
|  ||  ||   |   | | | |\+---+-+-+---+----/||  |  /+--+++--+----+-------++-+-------+--++++++--+--+---+-++++--+----+++-++-++-+---++--+--+-+++-+--+-\   |
|  ||  ||   |   | | | | |   | | |   |     ||  |  ||  |||  |    |       || |       |  ||||||  |  |   | ||||  |    ||| || || |   ||  |  | ||| |  ^ |   |
|  ||  ||   |   | | | | |   | | |   |     ||  |  ||  |||  |    |       || |       |  ||||||  |  |   | ||||  |    ||| || || |   ||  |  | ||| |  | |   |
|  ||  ||   |   | | | | |  /+-+-+---+-----++\ |  ||  |||  |    |       || |       |  ||||||  |  |   | ||||  |    ||| || || |   ||  |  | ||| |  | |   |
|  ||  ||   |   | |/+-+-+--++-+-+---+--\  ||| |  ||  |||  |    |       || |       |  ||||||  |  |   | ||||  |    ||| || || |   ||  |  | ||| |  | |   |
|  ||  ||   |   | ||| |/+--++-+-+---+--+--+++-+--++--+++--+----+-----\ || |       |  ||||||  |  |   | ||||  |  /-+++-++-++\|   ||  |  | ||| |  | |   |
|  ||  ||   |   | ||| |||  || | |   |/-+--+++-+--++--+++--+----+-----+-++-+-------+--++++++--+--+---+-++++--+--+-+++-++-++++---++\ |  | ||| |  | |   |
|  ||  ||   |   | ||| |||  || | |   || |  ||| \--++--+++--+----/     | || |       |  ||||||/-+--+---+-++++--+--+-+++-++-++++---+++-+--+\||| |  | |   |
|  ||  ||   |   | ||| |||  || | |   \+-+--+++----++--+++--+----------+-++-+-------+--+++++++-+--+---+-/|||  |  | ||| || ||||   ||| |  ||||| |  | |   |
|  ||  ||/--+---+-+++-+++--++-+-+----+-+--+++----++--+++--+\         | || |      /+--+++++++-+-\|   |  |||  |  | ||| || ||||   ||| |  ||||| |  | |   |
|  ||  |||  |   | ||| |||  || | |    | |  |||    ||  |||  ||         | || |      ||  ||||||| | ||   |  |||  |  | ||| || ||||  /+++-+--+++++-+--+-+-\ |
|  ||  |||  |   | ||| |||  || | \----+-+--+++----++--+++--++---------+-++-+-----<++--+++++++-+-++---+--+++--+--+-+++-++-/|||  |||| |  ||||| |  | | | |
|  ||  |||  |  /+-+++-+++--++-+-----\| |  |||    ||  |||  ||         | || |  /---++--+++++++-+-++---+--+++--+--+-+++-++--+++--++++-+--+++++\|  | | | |
|  ||  |||  |  || ||| |||  || |     || |/-+++----++--+++--++---------+-++-+--+---++--+++++++-+-++---+--+++--+-\| ||| ||  |||  |||| |  |||||||  | | | |
|  ||  |||  |  || ||| |||  || |     || || |||    ||/-+++--++---------+-++-+--+---++--+++++++-+-++---+--+++--+-++-+++-++--+++--++++-+-\|||||||  | | | |
|  ||  |||  |  || ||| ||| /++-+-----++-++-+++----+++-+++-\||         | || |  |   ||  ||||||| | ||   |  |||  | || ||| ||  |||  |||| | ||||||||  | | | |
|  ||  |||  |  || ||| ||| |\+-+-----++-++-++/    ||| ||| |||         | || |  |   || /+++++++-+-++---+--+++--+-++-+++-++-\|||  |||| | ||||||||  | | | |
|  ||  |||  |  || ||| ||| | | |     || || ||     ||| ||| |||        /+-++-+--+---++-++++++++-+-++---+--+++--+-++-+++-++-++++--++++-+-++++++++--+-+-+\|
|  ||  |||  |  || ||| |\+-+-+-+-----++-++-++-----+++-+++-+++--------+/ || |  |   || |||||||| | ||   |  |||  | || ||| || ||||  |||| | ||||||||  | | |||
|  ||  |||  |  || ||| | | | | |     || || |\-----+++-+++-+++--------+--++-+--+---++-++++++++-+-++---+--+++--/ || ||| || ||||  |||| | ||||||||  | | |||
|  ||  |||  |  || ||| | | | | |     || || |   /--+++-+++-+++--------+--++-+--+---++-++++++++-+-++-\ |  |||    || ||| || ||||  |||| | ||||||||  | | |||
| /++--+++--+--++-+++-+-+-+\| |     || || |   |/-+++-+++-+++--------+--++-+--+---++-++++++++-+-++-+-+--+++----++-+++-++-++++--++++-+-++++++++\ | | |||
| |||/-+++--+--++-+++-+-+-+++-+-----++-++-+---++-+++-+++-+++--------+--++-+--+---++-++++++++-+\|| | |  |||    || ||| || ||||  |||| | ||||||||| | | |||
| |||| ||| /+--++-+++-+-+-+++-+-----++-++-+--<++-+++-+++-+++--------+--++-+--+---++-++++++++-++++-+-+--+++-\  || ||| || ||||  |||| | |\+++++++-+-+-++/
| |||| ||| ||  || ||| | | ||| |     || || |/--++-+++-+++-+++--------+--++-+--+---++-++++++++-++++-+-+--+++-+--++-+++-++\||||  |||| | | ||||||| | | ||
\-++++-+++-++--++-+++-+-/ ||| |     || || ||  || ||\-+++-+++--------+--++-+--+---++-++++++++-++++-+-+--+++-+--++-+++-+++++++--++++-+-/ ||||||| | | ||
  |||| ||| ||  || ||| |   ||| |     || || ||  || |\--+++-+++--------+--++-+--+---++-++++++++-++++-+-+--+++-+--++-++/ |||||||  |||| |   ||||||| | | ||
  |||| ||| ||  || ||| |   ||| |     || || ||  || |   ||| |||        |  || |  |   || |||||||| |||| | |  ||| |  || ||  |||||||  |||| |   ||||||| | | ||
  |||| ||| ||  || ||| |   ||| |     || || ||  || |   ||| |||        |  || |  \---++-++++++++-++++-+-+--+++-+--++-++--+++++++--++++-+---++++/|| | | ||
  |||| ||| ||  || ||| |   ||| |     || || ||  || |   ||| |||        |  || |      || |||||||| |||| | |  ||| |  || \+--+++++++--++++-+---++++-/| | | ||
  |||| ||| ||  || ||| |   ||| |    /++-++-++--++-+---+++-+++--------+--++-+------++-++++++++-++++-+-+--+++-+--++--+--+++++++--++++-+--\||||  | | | ||
  |||\-+++-++--++-+++-+---+++-+----+++-++-++--++-+---+++-+++--------+--++-+------++-++++++++-+/|| |/+--+++-+--++--+--+++++++--++++-+--+++++--+-+-+-++\
  |||  ||| ||  || ||| |   ||| |    ||| || ||  || |   ||| |||        |  || |      || |||||||| | || |||  ||| |  ||  |  |||||||  |||| |  |||||  | | | |||
  \++--+++-++--++-+++-+---+/| |    ||| || ||  || |   ||| |||        |  || |      || |||||||| \-++-+++--+++-+--++--+--++++/||  |||| |  |||||  | | | |||
   ||  ||| ||  ||/+++-+---+-+-+----+++-++-++--++\|   ||| |||        |  || |      || \+++++++---++-+++--+++-+--++--+--+++/ ||  |||| |  |||||  | | | |||
   ||  ||| ||  |||||| |   | | |    ||| || ||  ||||   ||| |||        |  || \------++--+++++++---++-+++--+++-+--++--+--+++--++--++++-/  |||||  | | | |||
   || /+++-++--++++++-+---+-+-+----+++-++-++--++++---+++-+++--------+--++--------++-\|||||||   || |||  ||| |  ||  |  |||  ||  ||||    |||||  | | | |||
   || |||| ||/-++++++-+\  | | |    ||| || ||  ||||   ||| |||        |  ||        || ||||||||   || |||  ||| |  ||  |  \++--++--++++----++++/  | | | |||
   || |||| ||| |||||| ||  | |/+----+++-++-++--++++---+++-+++-----\  |  ||        || |||||||| /-++-+++--+++-+-\||  |   ||  ||  ||||    ||||   | | | |||
   || |||| ||| |||||| ||  | |||    ||| ||/++--++++---+++-+++-----+--+--++--------++-++++++++-+-++-+++--+++-+-+++>-+---++--++--++++----++++-\ | | | |||
   || |||| ||| \+++++-++--+-+++----+/| |||||  ||||   ||| |||     |  |  ||        || ||\+++++-+-++-+++--+++-+-+++--+---/|  ||  ||||    |||| | | | | |||
   || |||| |||  ||||| \+--+-+++----+-+-+++++--++++---++/ |||     |  |  ||        || |\-+++++-+-+/ |||  ||| | |||  |    |  ||  ||||    |||| | | | | |||
   || |||| |||  |||||  |  | |||    | | |||||  ||||   ||  |||    /+--+--++--------++-+\ ||||| | |  |||  ||| | |||  |    |  ||  ||||    |||| | | | | |||
   || |||| |||  |||||  |  | |||    | |/+++++--++++---++--+++----++--+--++--------++-++-+++++-+-+--+++--+++-+-+++--+----+--++--++++---\|||| | | | | |||
 /-++-++++-+++--+++++--+--+-+++----+-+++++++--++++-\ ||  |||    ||  |  ||     /--++-++-+++++-+-+\ |||  ||| | |||  |    |  ||  ||||/--+++++-+-+-+-+\|||
 | || |||| |||  |||||  |  | |||    | |||||||  |\++-+-++--+++----++--+--++-----+--++-++-+++++-+-++-+++--+++-+-+++--+----+--++--+++++--+++++-+-/ | |||||
 | || |||| |||  |||||  |  | |||  /-+-+++++++--+-++-+\||  |||    ||  |  ||    /+--++-++-+++++-+-++-+++--+++-+-+++--+----+--++--+++++--+++++-+---+\|||||
 | || |||| |||  ||||| /+--+-+++--+-+-+++++++--+-++-++++--+++--\ ||  |  ||    ||  || || ||||\-+-++-+++--+++-+-+++--+----+--++--+++++--++/|| |   |||||||
 |/++-++++-+++--+++++-++--+-+++--+-+-+++++++--+-++-++++--+++--+-++--+--++----++--++-++-++++--+-++-+++--+++\| |||  |    |  ||  |||||  || || |   |||||||
 |||| |||| ||| /+++++-++--+-+++--+-+-+++++++--+\|| ||||  |||  | ||/-+--++---\||  ||/++-++++--+-++-+++--+++++-+++\ |    |  |v  |||||  || || |   |||||||
 |||| |||| ||| |||||| ||  | |||  | | |||||||  |||| ||||  |||  | ||| |  ||   |||  ||||| ||||  | || |||  ||||| |||| |    |  ||  |||||  || || |   |||||||
 |||| |||| ||| |||||| ||  | |||  | | ||||||\--++++-++++--+++--+-+++-+--++---+++--+++++-++++--+-++-+++--+++++-++++-+----/  ||  |||||  || || |   |||||||
 |||| |||| ||| |||||| ||  | |||  | | ||||||   |||| ||||  |||  | ||| |  ||   |||  ||||| ||||  | || |\+--+++++-++++-+-------++--+++++--++-++-+---++++++/
/++++-++++-+++-++++++-++--+\|||  | | ||||||   |||| ||||  |||  | ||| |  ||/--+++--+++++-++++--+-++-+-+--+++++-++++-+-------++--+++++--++-++-+\  ||||||
||||| |||| ||| |||||| ||  ||||\--+-+-++++++---++++-++++--+++--+-+++-+--+/|  |||  ||||| ||||  | || | |  ||||| |||| |       ||  |||||  || || ||  ||||||
||||| |||| |||/++++++-++--++++-\ | | ||||||   |||| ||||  |||  | ||| |  | |  |||  ||||| ||||  | || | |  ||||| |||| |       ||  |||||  || || ||  ||||||
||||| |||| |||||||||| ||/-++++-+-+-+-++++++---++++-++++--+++--+-+++-+--+-+--+++--+++++-++++\ | || | |  ||||| |||| |       ||  |||||  || || ||  ||||||
||||| |||| |||||||||| ||| |||| | | | ||||||   |||| ||||  |||  | ||| |  | |  |||  ||||| ||||| | || | |  ||||| |||| |       ||  |||||  || || ||  ||||||
||||| |||| |||||||||| ||| |||| | | | ||||||   |||| ||||  |||  | ||| |  | |  |||  ||\++-+++++-+-++-+-+--+++++-+++/ |       ||  |||||  || || ||  ||||||
||||| |||| |||||||||| ||| |||| | | | ||||||   |||| ||||  |||  | ||| |  | |  |||  || || |\+++-+-++-+-+--+++++-+++--+-------++--+++++--++-+/ ||  ||||||
||||| |||| |||||||||| ||| |||| | | | ||||||   |||| ||||  |||  | ||| |  | |  |||  || || | |\+-+-++-+-+--+++++-+++--+-------++--+++++--++-/  ||  ||||||
||||| |||| |||||||||| ||| |||| | | | ||||||   ||||/++++--+++--+-+++-+--+-+--+++--++-++-+-+-+-+\|| | |  ||||| |||  |       ||  |||||  ||    ||  ||||||
||||| |||| |||||||||| ||| |||\-+-+-+-++++++---+++++++++--+++--+-+/| |  | |  |||  \+-++-+-+-+-++/| | |  ||||| |||  |      /++--+++++--++----++-\||||||
||||| |||| |||||||\++-+++-+++--+-+-+-++++++---+++++++++--+++--+-+-+-+--+-+--+++---+-++-/ | | \+-+-+-+--+++++-/||  |      |||  |||||  ||    || |||||||
|\+++-++++-+++++++-++-+++-+++--+-+-+-++++++---+++++/|||  |||  | \-+-+--+-+--+++---+-+/   | | /+-+-+-+--+++++--++--+------+++--+++++--++----++\|||||||
| ||| ||\+-+++++++-++-+++-+++--+-+-+-++++++---+++++-+++--+++--+---+-+--+-+--+++---+-+----+-+-++-+-+-+->+++++--++--/      |||  |||||  ||    ||||||||||
| ||\-++-+-+++++++-++-+++-+++--+-+-+-++++++---+++++-++/  |||  |   | |  | |  |||   | |    | | || | | |  |||||  ||         |||  ||\++--++----++++/|||||
| ||  || | ||||||| || ||\-+++--+-+-+-++++++---+++++-++---+++--+---+-+--+-+--+++---+-+----+-/ || | | |  |||||  ||         |||  || ||  ||    ||^| |||||
| ||  || | |||\+++-++-++--+++--/ | | ||||||   |||\+-++---+++--+---+-+--+-+--+++---+-+----+---++-+-+-+--+++++--++---------+++--++-++--++----++++-+/|||
| ||  || | ||| ||| || \+--+++----+-+-++++++---+++-+-++---+++--/   | |  | |  |||   | |    |   || | | |  |||||  ||         |||  || ||  ||    |||| | |||
| ||  || | \++-+++-++--+--+++----+-+-++++++---+++-+-++---+++------+-+--+-+--+++---+-+----+---++-+-+-+--++++/  ||         |||  || ||  ||    |||| | |||
| ||  || \--++-+++-++--+--+++----+-+-++++++---+++-+-++---++/      | |  | |  |\+---+-+----+---++-+-+-+--++++---++---------+++--++-++--++----++++-/ |||
| ||  ||    || ||| |\--+--+++----+-+-++++++---+++-+-++---++-------+-+--+-+--+-+---/ |    |   || | | |  ||||   ||         |||  || ||/-++----++++---+++\
| ||  ||    || ||| | /-+--+++----+-+-++++++---+++-+-++---++-------+-+--+-+--+-+-----+--\ |   || | | |  ||||   ||         |||  || ||| ||    ||||   ||||
| ||  || /--++-+++-+-+-+--+++----+-+-++++++---+++-+-++---++-------+-+--+-+--+-+-----+--+-+---++-+\| |  ||||   ||         |||  || ||| ||    ||||   ||||
| ||  || |  || ||| | | |/-+++----+-+-++++++---+++-+-++---++\      | |  | |  | |     |  | |   || ||| |  ||||   ||         ^||  || ||| ||    ||||   ||||
| ||  |\-+--++-+++-+-+-++-+++----+-+-++++++---+++-+-++---+/|      | |  | \--+-+-----+--+-+---++-+++-+--++++---++---------+++--++-+++-++----+/||   ||||
| ||  |  |  || ||| | | || |||    \-+-++++++---+++-+-/|   | |      | |  |    | |     |  | |   || ||| |  ||||   ||         \++--++-+++-++----+-+/   ||||
| ||  |  | /++-+++-+-+-++-+++------+-++++++---+++-+--+---+-+------+-+--+----+-+-----+--+-+---++-+++-+--++++---++-----\    ||  || ||| ||    | |    ||||
| ||  |  | ||| ||| | | || |||      | ||||\+---+++-+--+---+-+------+-+--+----+-+-----+--+-+---++-+++-+--++++---++-----+----++--++-+++-++----/ |    ||||
| |\--+--+-+++-+++-+-+-++-+++------+-++++-+---+++-+--+---+-+------+-+--+----+-+-----+--+-/   || ||| |  ||||   ||     |    ||  || ||| ||      |    ||||
| |   |  |/+++-+++-+-+-++-+++------+-++++-+-\ ||| |  |   | |      | |  |    | |     |  |     || ||| |  ||||   |\-----+----/|  || ||| ||      |    ||||
| |   |  ||||| |\+-+-+-++-+++------+-++++-+-+-+++-+--+---+-+------+-+--+----+-+-----+--+-----++-+++-+--+/||   |      |     |  || ||| ||      |    ||||
| |   |  ||||| | | |/+-++-+++------+\|||\-+-+-+++-+--+---+-+------+-+--+----+-+-----+--+-----++-+++-+--+-++---/      |     |  || ||| ||      |    ||||
| |   |  ||||| | | ||| || |||      |||||  \-+-+++-+--+---+-+------+-+--+----+-+-----+--+-----++-+++-+--+-++----------+-----/  || ||| ||      |    ||||
| |   |  ||||| | | \++-++-+++------++++/    | ||| |  |   | |      | |  |   /+-+-----+--+--\  \+-+++-+--+-++----------+--------++-+++-++------/    ||||
| |   |  ||||| | |  || || |||      ||||     | ||| |  |   | |      | |  |   || |     |  |  |   | ||| |  | ||          |        || ||| ||           ||||
| |   |  ||||| | |  || || |||      ||||     | ||| |  |/--+-+------+-+--+---++-+-----+--+--+---+-+++-+--+-++--\       |        || ||| ||           ||||
| | /-+--+++++-+-+--++-++-+++------++++-----+-+++-+-\||  | |      | |  \---++-+-----+--+--+---+-+++-/  | ||  |       |        || ||| ||           ||||
| | | |  ||||| | |  || || |||      ||||     | ||| | |||  | |      | |      || |     |  |  |   | |||    | ||  |       |        || ||| ||           ||||
| | | |  ||||| | |  || || |||      ||||     | ||| | |||  | | /----+-+------++-+-----+--+--+---+-+++----+-++--+-------+--\     || ||| ||           ||||
| | | |  ||||| | |  || || |||      ||||     | ||| | |||  | |/+----+-+------++-+-----+--+--+---+-+++---\\-++--+-------+--+-----+/ ||| ||           ||||
| | | |  ||||| | |  || || ||\------++++-----+-+++-+-+/|  | |||    | |      || \-----+--+--+---+-/||   |  ||  |       |  |     |  ||| ||           ||||
\-+-+-+--+++++-+-+--++-++-+/       ||||     | ||| | | |  | |||    | |      ||       |  |  |   |  ||   |  ||  |       |  |     |  ||| ||           ||||
  | | |  |||\+-+-+--++-++-+--------++++-----+-+++-+-+-+--+-+++----+-+------++-------+--+--+---+--++---+--/|  |       |/-+-----+--+++-++---\       ||||
  | | |  ||| | | |  || || |        ||||     | ||| | | |  | |||    | |      \+-------+--+--/   |  ||   |   |  |       || |     |  ||| ||   |       ||||
  | | |  ||| | | |  || || |        |^||     | ||| | | |  | |||    | |       |       |  |      |  ||   |   |  |   /---++-+-----+--+++-++--\|       ||||
  | | |  ||| | | |  || || |        ||||     | ||| | | \--+-+++----+-+-------+-------+--+------+--++---+---+--/   |   || |     |  ||| ||  ||       ||||
  | | |  |||/+-+-+-<++-++-+--------++++-----+-+++-+-+----+-+++----+-+-------+-------+--+------+--++---+-\ |      |   || |     |  ||| ||  ||       ||||
  | | |  ||||| | |  || || |        ||\+-----+-+++-+-+----+-+++----+-+-------+-------+--+------+--++---+-+-+------+---++-+-----+--/|| ||  ||       ||||
  | | |  ||||| | |  || || |        || |     | ||| | |    | ||\----+-+-------+-------+--+------+--++---+-+-+------+---++-/     \---++-++--++-------+/||
  | | |  ||||| | |  || || |        || |     | ||| | |    | ||     | | /-----+-------+--+------+--++---+-+-+------+---++-----\     || ||  ||       | ||
  | \-+--+++++-+-+--++-++-+--------++-+-----+-+++-+-/    | ||     \-+-+-----/       |  |      |  ||   | | |      |   ||     |     || ||  ||       | ||
  |   |  ||||| | |  || || \--------++-+-----+-+++-+------/ ||       | |             |  |      |  ||   | | |      |   ||     |     || ||  ||       | ||
  \---+--+++++-+-+--++-++----------++-+-----+-+++-+--------++-------+-+-------------+--+------+--++---+-+-/      |   ||     |     || ||  ||       | ||
      |  ||||| | |  || ||          || |     | ||| |/-------++-------+-+-------------+--+------+--++---+-+--------+---++--\  |     || ||  ||       | ||
      |  ||||| | |  || ||          || |     | ||| ||       ||       | |             |  |      |  ||   | |        |   ||  |  |     |\-++--++-------+-+/
      |  ||||\-+-+--++-/|          || |     | \++-++-------++-------+-+-------------+--+------+--+/   | |        |   ||  |  |     |  ||  ||       | |
      |  |||\--+-+--++--+----------++-+-----+--++-++-------++-------+-+-------------+--+------+--+----+-/        |   ||  |  |     |  ||  ||       | |
      |  |||   | |  ||  \----------++-+-----+--++-++-------/\-------+-+-------------+--+------+--+----/          |   ||  |  |     |  ||  ||       | |
      |  |||   | |  ||             || |     |  || ||                | \-------------+--+---->-+--+---------------+---++--+--/     |  ||  ||       | |
      |  ||\---+-+--++-------------++-+-----+--++-++----------------+---------------+--+------+--+---------------+---/|  |        |  ||  ||       | |
      |  ||    | |  ||             \+-+-----+--++-++----------------+---------------+--+------+--+---------------+----+--+--------+--+/  ||       | |
      |  ||    | |  ||              | |     |  || ||                |               |  |      |  |               |    |  |        |  |   ||       | |
      |  ||    | |  ||              | \-----+--++-++----------------+---------------+--+------+--+---------------+----+--+--------+--/   ||       | |
      |  ||    | |  ||              |       |  || \+----------------+---------------+--+------/  |               |    \--+--------+------+/       | |
      \--++----+-+--++--------------+-------+--++--+------->--------+---------------/  |         |               |       |        |      |        | |
         \+----+-+--++--------------+-------+--++--+----------------+------------------+---------/               |       |        |      |        | |
          \----+-+--++--------------+-------/  ||  |                |                  |                         \-------+-<------+------/        | |
               \-+--++-->-----------+----------/|  |                \------------------+---------------------------------+--------+---------------+-/
                 \--++--------------+-----------/  |                                   |                                 |        |               |
                    \+--------------/              \-----------------------------------+---------------------------------/        \---------------/
                     \-----------------------------------------------------------------/                                                              `;

const parseMap = map => {
  const rows = map.split('\n');
  return rows.map(row => row.split(''));
}

module.exports = {
  inputExample: parseMap(inputExample),
  input: parseMap(input)
}
