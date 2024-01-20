#include <ctype.h>
#include <locale.h>
#include <math.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/types.h>

int main() {
  system("cls");

  return 0;
}

// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/c
int countIntegers(const char *str) {
  int count = 0;
  int isDigit = 0;

  while (*str) {
    if (isdigit(*str)) {
      if (!isDigit) {
        count++;
        isDigit = 1;
      }
    } else {
      isDigit = 0;
    }
    str++;
  }
  return count;
}

void high_and_low(const char *strnum, char *result) {
  int len = countIntegers(strnum);
  int numArr[len];

  for (int i = 0; i < len; i++) {
    sscanf(strnum, "%d", &numArr[i]);
    strnum = strchr(strnum, ' ');
    if (strnum == NULL) {
      break;
    }
    strnum++;
  }
  int lowest = numArr[0];
  int highest = numArr[0];
  for (int i = 1; i < len; i++) {
    lowest = numArr[i] < lowest ? numArr[i] : lowest;
    highest = numArr[i] > highest ? numArr[i] : highest;
  }

  printf("%d %d", highest, lowest);

  sprintf(result, "%d %d", highest, lowest);
}

int main() {
  char a[] = "-1 63 -5 662 -1 0 0 -9 4 67 4 -4";
  char res[100];

  high_and_low(a, res);

  return 0;
}

// do_test("8 3 -5 42 -1 0 0 -9 4 7 4 -4", "42 -9");
//	do_test("1 2 3", "3 1");

// https://www.codewars.com/kata/5842df8ccbd22792a4000245
char *expandedForm(char *string, unsigned long long n) {
  char temp[100];
  sprintf(temp, "%llu", n);

  int len = strlen(temp);
  long long unsigned m = pow(10, len - 1);
  m += m % 10 == 9 ? 1 : 0;

  char *result = malloc(len * 10 * sizeof(char));
  char buffer[100];
  strcpy(result, "");

  for (int i = 0; i < len; i++) {
    int digit = temp[i] - '0';
    if (digit != 0) {
      sprintf(buffer, "%llu", digit * m);
      strcat(result, buffer);
      strcat(result, " + ");
    }
    m /= 10;
  }
  result[strlen(result) - 3] = '\0';

  strcpy(string, result);
  return string;
}
int main() {
  system("cls");
  char string[1024];

  char *decomposition = expandedForm(string, 979657965);
  printf("%s\n", decomposition);
  free(decomposition);

  return 0;
}

// https://www.codewars.com/kata/62ad72443809a4006998218a
enum button { NOTHING, LIKE, DISLIKE };
enum button like_or_dislike(size_t n, const enum button events[n]) {
  if (n < 2) {
    return n == 0 ? NOTHING : events[0];
  }

  enum button state = events[0];
  for (int i = 1; i < n; i++) {
    if (events[i] == state) {
      state = NOTHING;
    } else if (events[i] != state) {
      state = events[i];
    }
  }

  return state;
}
int main() {
  system("cls");

  char a[] = {LIKE, LIKE, LIKE};

  enum button result = like_or_dislike(3, a);
  printf("Result: %d\n", result);
  return 0;
}

// https://www.codewars.com/kata/54f9173aa58bce9031001548 DONT KNOW WHY THIS IS
// WRONG
typedef bool (*predicate)(int);
int *take_while(size_t len_in, const int array[len_in], predicate p,
                size_t *len_out) {
  int tr = 0;
  int in = 0;
  int fin = 0;
  int newI = 0;
  int lngr = 0;

  for (size_t i = newI; i < len_in; i++) {
    if (p(array[i])) {
      tr++;
    } else {
      newI = i + 1;
      tr = 0;
    }
    if (tr > lngr) {
      fin = i;
      lngr = tr;
    }
    in = fin - lngr;
  }

  *len_out = lngr;
  int *out = malloc(lngr * sizeof(int));
  for (size_t i = 0; i < lngr; i++) {
    out[i] = array[in + 1 + i];
  }
  // printf("\n%d\nin-%d fin-%d\n", lngr, in, fin);
  return lngr < 2 ? malloc(0) : out;
}

static bool is_odd(int x) { return x % 2; }
static bool is_even(int x) { return !(x % 2); }

int main() {
  system("cls");

  int arr[] = {2, 4, 6, 8, 1, 2, 5, 4, 3, 2, 2, 2, 2, 4, 2, 2};
  int arr1[] = {0, 2, 3, 5, 6, 8};
  size_t len_out = 0;
  int *result = take_while(6, arr1, is_even, &len_out);

  for (size_t i = 0; i < 2; i++) {
    printf("%d ", result[i]);
  }

  printf("\n");
  free(result);
  return 0;
}

// https://www.codewars.com/kata/52fba2a9adcd10b34300094c/solutions/c
void transpose_matrix(size_t rows, size_t cols, const int matrix[rows][cols],
                      int transpose[cols][rows]) {

  for (size_t i = 0; i < cols; i++) {
    for (size_t g = 0; g < rows; g++) {
      transpose[i][g] = matrix[g][i];
    }
  }

  for (size_t i = 0; i < cols; i++) {
    for (size_t v = 0; v < rows; v++) {
      printf("%d ", transpose[i][v]);
    }
    printf("\n");
  }
}
int main() {
  system("cls");
  int t[0][0] = {};
  int m[2][3] = {{1, 2, 3}, {4, 5, 6}};
  transpose_matrix(2, 3, m, t);
  return 0;
}

// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/solutions/c
int **multiplication_table(int n) {
  int **table = malloc(sizeof(int *) * n);
  for (int i = 0; i < n; i++) {
    table[i] = malloc(sizeof(int) * n);
    for (int j = 0; j < n; j++) {
      if (j == 0) {
        table[i][j] = i + 1;
      } else {
        table[i][j] = table[i][0] * (j + 1);
      }
    }
  }
  return table;
}
int main() {
  system("cls");
  multiplication_table(4);
  return 0;
}

// https://www.codewars.com/kata/541c8630095125aba6000c00/c
int digital_root(int n) {
  int n1 = n;

  while (n1 > 9) {
    int length = (int)floor(log10((float)n1)) + 1;
    int *arr = malloc(length * sizeof(int));
    int i = 0;
    do {
      arr[i] = n1 % 10;
      n1 /= 10;
      i++;
    } while (n1 != 0);

    int sum = 0;
    for (int i = 0; i < length; i++) {
      sum += arr[i];
    }
    printf("%d\n", sum);
    n1 = sum;
  }
  return n1;
}
int main() {
  system("cls");
  digital_root(132189);
  return 0;
}

// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/c
char *dot_calculator(const char *expression) {
  int expLength = strlen(expression);
  char signal;
  int expLeft = 0;
  for (int i = 0; i < expLength; i++) {
    if (expression[i] == ' ') {
      signal = expression[i + 1];
      break;
    }
    expLeft++;
  }
  int expRight = 0;
  for (int i = expLength - 1; i >= 0; i--) {
    if (expression[i] == ' ') {
      break;
    }
    expRight++;
  }
  int result = 0;
  switch (signal) {
  case '*':
    result = expLeft * expRight;
    break;
  case '+':
    result = expLeft + expRight;
    break;
  case '-':
    result = expLeft - expRight;
    break;
  default:
    result = expLeft / expRight;
    break;
  }
  // need to alloc 1 more space for the null terminator
  char *expOut = malloc(result + 1 * sizeof(char));

  for (int i = 0; i < result; i++) {
    expOut[i] = '.';
    // printf("%c", expOut[i]);
  }
  expOut[result] = '\0';
  return expOut;
}
int main() {
  system("cls");
  char arr[] = {"..... * ......"};
  dot_calculator(arr);
  return 0;
}

// https://www.codewars.com/kata/5901555b63bf404a66000029 //INCOMPLETE
bool *newOne(bool *arr, int len) {
  bool *newArr = malloc(sizeof(bool) * len);
  bool temp = arr[len - 1];

  for (int i = 0; i < len; i++) {
    if (temp) {
      newArr[i] = !arr[i];
    } else {
      newArr[i] = arr[i];
    }
    temp = arr[i];
  }

  return newArr;
}

bool *lightBulbs(bool *lights, int n, int len) {
  bool *final = malloc(sizeof(bool) * len);
  bool *temp = malloc(sizeof(bool) * len);
  memcpy(temp, lights, sizeof(bool) * len);

  for (int i = 0; i < n; i++) {
    memcpy(final, newOne(temp, len), sizeof(bool) * len);
    memcpy(temp, final, sizeof(bool) * len);
  }

  free(temp);
  return final;
}

int main() {
  bool lights[] = {false, true, true, false, true, true};
  int n = 2;
  int len = sizeof(lights) / sizeof(lights[0]);
  bool *result = lightBulbs(lights, n, len);

  for (int i = 0; i < len; i++) {
    printf("%d ", result[i]);
  }
  printf("\n");

  free(result);
  return 0;
}

//
char *maskify(char *masked, const char *string) {
  //*masked = '\0'; // write to masked
  int strSize = strlen(masked);
  char lastFour[4] = {};
  int lastFourIndex = 0;

  for (int i = strSize - 4; i < strSize; i++) {
    lastFour[lastFourIndex] = masked[i];
    lastFourIndex++;
  }
  for (int j = 0; j < strSize - 4; j++) {
    masked[j] = '#';
  }
  int r = 0;
  for (int g = strSize - 4; g < strSize; g++) {
    masked[g] = lastFour[r];
    r++;
  }
  return masked; // return it
}

int main() {
  system("cls");
  char masked[100] = "7935u793561pp6";
  maskify(masked, "09");
  printf("%s", masked);
  return 0;
}

//

unsigned real_numbers(unsigned n) {
  int nn = n;
  int *arr = malloc(nn * sizeof(int));
  for (int i = 1; i <= nn; i++) {
    arr[i] = i;
    // printf("%d ", arr[i]);
  }
  int cnt = 0;
  for (int j = 0; j < nn; j++) {
    if ((arr[j] % 2 != 0) && (arr[j] % 3 != 0) && (arr[j] % 5 != 0)) {
      cnt++;
    }
  }
  // printf("\n%d", cnt);
  free(arr);
  return cnt;
}
int main() {
  system("cls");
  unsigned showw = real_numbers(66);
  printf("%d", showw);
  return 0;
}

// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8 //INCOMPLETE
void remove_parentheses(const char *str_in, char *str_out) {
  int strSize = strlen(str_in);
  char *sArr = calloc(strSize + 1, sizeof(char));
  for (int f = 0; f < strSize; f++) {
    sArr[f] = str_in[f];
  }
  int sArrSize = strlen(sArr);

  bool repeat = false;
  for (int ji = 0; ji < sArrSize; ji++) {
    if (sArr[ji] == '(' || sArr[ji] == ')') {
      repeat = true;
      break;
    }
  }
  int initial = 0;
  int final = 0;
  while (repeat == true) {
    for (int r = initial; r < sArrSize; r++) {
      if (sArr[r] == '(') {
        initial = r;
      }
    }
    for (int t = initial; t < sArrSize; t++) {
      if (sArr[t] == ')') {
        final = t;
        break;
      }
    }
    for (int ib = initial; ib <= final; ib++) {
      for (int v = initial; v < sArrSize; v++) {
        sArr[v] = sArr[v + 1];
      }
      sArrSize--;
    }
    initial = 0;
    final = 0;
    int count = 0;
    for (int i = 0; i < sArrSize; i++) {
      if (sArr[i] != '(' && sArr[i] != ')') {
        count++;
      }
      if (count == sArrSize) {
        repeat = false;
      }
    }
  }

  // str_out = malloc((sArrSize + 1) * sizeof(char));
  strcpy(str_out, sArr);

  for (int ff = 0; ff < sArrSize; ff++) {
    // printf("%c", str_out[ff]);
  }
  free(sArr);
  // free(str_out);
}
int main() {
  system("cls");
  remove_parentheses("example(unwanted thing)example", "exampleexample");
  return 0;
}

// https://www.codewars.com/kata/536c6b8749aa8b3c2600029a/c
char *sort_string(const char *string, const char *ordering) {
  int sOrdSize = strlen(ordering);
  int sInSize = strlen(string);
  char *ordered = malloc(sInSize + 1 * sizeof(int));
  int h = 0;

  int *orderin = malloc((sOrdSize + 1) * sizeof(int));
  for (int u = 0; u < sOrdSize; u++) {
    orderin[u] = ordering[u];
  }

  for (int i = 0; i < sOrdSize; i++) {
    for (int f = 0; f < sOrdSize; f++) {
      if ((orderin[i] == orderin[f]) && (i != f)) {
        for (int y = f; y < sOrdSize - 1; y++) {
          orderin[y] = orderin[y + 1];
        }
        sOrdSize--;
        f--;
      }
    }
  }

  int z = 0;
  int endSize = sInSize;
  char *end = malloc(endSize * sizeof(char));
  for (int j = 0; j < sOrdSize; j++) {
    for (int i = 0; i < sInSize; i++) {
      if (string[i] == orderin[j]) {
        ordered[h] = string[i];
        h++;
      }
    }
  }

  for (int n = 0; n < sInSize; n++) {
    int inOrderin = 0;
    for (int m = 0; m < sOrdSize; m++) {
      if (string[n] == orderin[m]) {
        inOrderin = 1;
        break;
      }
    }
    if (!inOrderin) {
      end[z] = string[n];
      z++;
    }
  }
  int gg = 0;
  for (int w = z; w > 0; w--) {
    ordered[sInSize - w] = end[gg];
    gg++;
  }

  ordered[sInSize] = '\0';
  free(orderin);
  free(end);
  return ordered;
}
int main() {
  system("cls");
  char *sorted_string = sort_string("foos", "of");
  printf("%s\n", sorted_string);
  free(sorted_string);
  return 0;
}

// https://www.codewars.com/kata/52597aa56021e91c93000cb0
void move_zeros(size_t len, int arr[len]) {
  // mutate arr in place
  int lenn = len;
  int times = 0;

  for (int i = 0; i < len; i++) {
    if (arr[i] == 0) {
      for (int j = i; j < lenn; j++) {
        arr[j] = arr[j + 1];
      }
      i--;
      lenn--;
      times++;
    }
  }

  for (int i = lenn; i < len; i++) {
    arr[i] = 0;
  }

  for (int i = 0; i < len; i++) {
    printf("%d ", arr[i]);
  }
  free(arr);
}
int main() {
  system("cls");
  int array[20] = {9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9};
  move_zeros(20, array);
  return 0;
}
