const inputExample = String.raw`/->-\
|   |  /----\
| /-+--+-\  |
| | |  | v  |
\-+-/  \-+--/
  \------/   `;

console.log(inputExample.split('\n'));
const a = inputExample.split('\n');
for (let i = 0; i < a[1].length; i++) {
  console.log(a[1][i]);
}
