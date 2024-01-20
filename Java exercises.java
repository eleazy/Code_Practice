//https://www.codewars.com/kata/6087bb6050a6230049a068f1
public class App {
    public static String columnize(String[] input, int numberOfColumns) {
        // your implementation
        boolean empty = true;
        for (int i = 0; i < input.length; i++) {
            if (input[i] != "") {
                empty = false;
                break;
            }
        }
        if (empty) {
            return " | \n | ";
        }
        int len = 0;
        for (int d = 0; d < numberOfColumns; d++) {
            len = 0;
            for (int i = d; i < input.length; i += numberOfColumns) {
                len = input[i].length() > len ? input[i].length() : len;
            }
            for (int b = d; b < input.length; b += numberOfColumns) {
                while (input[b].length() < len) {
                    input[b] += ' ';
                }
            }
        }

        StringBuilder r = new StringBuilder();
        int ii = 0;
        for (int j = 0; j < input.length; j += numberOfColumns) {
            for (int i = ii; i < (ii + numberOfColumns); i++) {
                if ((i == (ii + numberOfColumns - 1)) && (i < input.length)) {
                    r.append(input[i]);
                } else if (i < input.length) {
                    r.append(input[i] + " | ");
                }
            }
            if (j < input.length - numberOfColumns) {
                r.append("\n");
            }
            ii += numberOfColumns;
        }
        if (r.length() > 0 && r.charAt(r.length() - 2) == '|') {
            r.delete(r.length() - 3, r.length());
        }
        return r.toString();
    }

    public static void main(String[] args) {
        String[] a = { "1", "12", "123", "1234", "12345", "123456" };
        System.out.println(columnize(a, 99));

    }
}

//https://www.codewars.com/kata/55c04b4cc56a697bb0000048
public class App {

    public static boolean scramble(String str1, String str2) {
        char str1C[] = str1.toCharArray();
        HashMap<Character, Integer> hash1 = new HashMap<>();

        for (int i = 0; i < str1C.length; i++) {
            hash1.put(str1C[i], hash1.getOrDefault(str1C[i], 0) + 1);
        }

        char str2C[] = str2.toCharArray();
        HashMap<Character, Integer> hash2 = new HashMap<>();

        for (int i = 0; i < str2C.length; i++) {
            hash2.put(str2C[i], hash2.getOrDefault(str2C[i], 0) + 1);
        }

        int l = 0;
        for (int i = 0; i < str2C.length; i++) {
            if (hash1.containsKey(str2C[i])) {
                if (hash1.get(str2C[i]) >= hash2.get(str2C[i])) {
                    l++;
                }
            }
        }
        return l == str2.length() ? true : false;
    }

    public static void main(String[] args) {
        System.out.println(scramble("cedewaraaossoqqyt", "codewars"));// true
    }
}

//https://www.codewars.com/kata/559536379512a64472000053
public class App {
    public static String pplayPass(String s, int n) {
        // your code
        char[] sArr = s.toCharArray();
        ArrayList<Character> cArr = new ArrayList<Character>();
        int temp = 0;
        for (int i = 0; i < sArr.length; i++) {
            if (String.valueOf(sArr[i]).matches("[a-zA-Z]")) {
                temp = ((Character.toLowerCase(sArr[i]) - 'a' + n) % 26 + 'a');
                if (i % 2 == 0) {
                    temp = ((Character.toUpperCase(sArr[i]) - 'A' + n) % 26 + 'A');
                }
                cArr.add((char) (temp));
            } else if (String.valueOf(sArr[i]).matches("\\d")) {
                cArr.add((char) (9 - (sArr[i] - '0') + '0'));
            } else {
                cArr.add(sArr[i]);
            }
        }
        Collections.reverse(cArr);
        StringBuilder passPhr = new StringBuilder();
        for (char c : cArr) {
            passPhr.append(c);
        }
        return passPhr.toString();
    }
    public static String playPass(String s, int n) {
        String p = s.chars()
                .map(Character::toLowerCase)
                .map(c -> Character.isLetter(c) ? (c - 'a' + n) % 26 + 'a'
                        : Character.isDigit(c) ? (char) (9
                                - (c - '0') + '0') : c)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        String p1 = IntStream.range(0, p.length())
                .mapToObj(i -> i % 2 != 0 ? Character.toLowerCase(p.charAt(i))
                        : Character.toUpperCase(p.charAt(
                                i)))
                .map(Object::toString)
                .collect(Collectors.joining());
        String pF = new StringBuilder(p1).reverse().toString();

        return pF;
    }
    public static void main(String[] args) throws Exception {
        // App app = new App();
        System.out.print(pplayPass("BORN IN 2015!", 1));
        System.out.print(playPass("BORN IN 2015!", 1));
    }
}


//https://www.codewars.com/kata/556deca17c58da83c00002db
public class App {
    public double[] tribonacci(double[] s, int n) {
        // hackonacci me
        ArrayList<Double> seq = new ArrayList<Double>();

        for (int i = 0; i < 3; i++) {
            seq.add(s[i]);
        }
        for (int i = 3; i < n; i++) {
            seq.add(seq.get(i - 1) + seq.get(i - 2) + seq.get(i - 3));
        }

        double[] seqA = seq.stream().mapToDouble(Double::doubleValue).toArray();
        return Arrays.copyOfRange(seqA, 0, n);
    }

    public static void main(String[] args) throws Exception {
        App app = new App();
        double[] seq = { 1, 1, 1 };
        System.out.println(app.tribonacci(seq, 10));
    }
}

//https://www.codewars.com/kata/6402205dca1e64004b22b8de/java
public class App {
    public static int find_caterer(int budget, int people) {
        // happy coding :)
        if ((people == 0) || (budget < 15 * people)) {
            return -1;
        }

        int p[] = { people * 15, people * 20, people * 30 };
        if (people > 60) {
            p[2] = (int) (p[2] - (p[2] * 0.2));
        }
        Arrays.sort(p);

        return p[2] < budget ? 3 : p[1] < budget ? 2 : 1;
    }

    public static void main(String[] args) throws Exception {
        System.out.println(find_caterer(1500, 61));
    }
}


//https://www.codewars.com/kata/550f22f4d758534c1100025a/java
public class App {
    public static String[] dirReduc(String[] arr) {
        // Your code here.
        int c = 1;
        String[] nArr = new String[arr.length];
        for (int i = 0; i < arr.length; i++) {
            nArr[i] = arr[i];
        }

        while (c != 0) {
            c = 0;
            for (int i = 0; i < nArr.length - 1; i++) {
                if (((nArr[i] == "NORTH") && (nArr[i + 1] == "SOUTH")
                        || (nArr[i] == "SOUTH") && (nArr[i + 1] == "NORTH"))
                        || ((nArr[i] == "EAST") && (nArr[i + 1] == "WEST")
                                || (nArr[i] == "WEST") && (nArr[i + 1] == "EAST"))) {
                    nArr[i] = "dd";
                    nArr[i + 1] = "dd";
                    c += 2;
                }
            }

            int k = 0;
            for (int i = 0; i < arr.length; i++) {
                if (!nArr[i].equals("dd")) {
                    nArr[k] = nArr[i];
                    k++;
                }
            }
            for (int i = k; i < arr.length; i++) {
                nArr[i] = "dd";
            }
        }

        int l = 0;
        for (int i = 0; i < nArr.length; i++) {
            if (nArr[i] != "dd") {
                l++;
            }
        }

        String[] fArr = new String[l];
        for (int i = 0; i < fArr.length; i++) {
            fArr[i] = nArr[i];
        }

        return fArr;
    }

    public static void main(String[] args) throws Exception {
        String[] arr = { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
        String[] arr1 = { "NORTH", "SOUTH", "EAST", "WEST" };
        String[] arr2 = { "NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST" };
        String[] arr3 = { "NORTH", "WEST", "SOUTH", "EAST" };

        System.out.print(dirReduc(arr3));
    }
}


//https://www.codewars.com/kata/5629db57620258aa9d000014/java
public class App {
    public static char[] filterLowercaseLetters(char[] arr) {
        StringBuilder sb = new StringBuilder();
        for (char c : arr) {
            if (Character.isLowerCase(c)) {
                sb.append(c);
            }
        }
        return sb.toString().toCharArray();
    }

    public static ArrayList<Character> filterFrequency(char[] s1C) {
        ArrayList<Character> s1List = new ArrayList<Character>();
        for (int i = 0; i < s1C.length; i++) {
            s1List.add(s1C[i]);
        }

        Iterator<Character> iter = s1List.iterator();
        while (iter.hasNext()) {
            char c = iter.next();
            if (Collections.frequency(s1List, c) == 1) {
                iter.remove();
            }
        }
        return s1List;
    }

    public static String mix(String s1, String s2) {
        // your code
        char[] s1C = filterLowercaseLetters(s1.toCharArray());
        char[] s2C = filterLowercaseLetters(s2.toCharArray());
        Arrays.sort(s1C);
        Arrays.sort(s2C);
        ArrayList<Character> s1List = filterFrequency(s1C);
        ArrayList<Character> s2List = filterFrequency(s2C);
        ArrayList<Character> s1s2 = filterFrequency(s1C);
        s1s2.addAll(s2List);

        HashSet<Character> each = new HashSet<>(s1s2);
        ArrayList<Integer> times = new ArrayList<Integer>();
        for (Character c : each) {
            times.add(Collections.frequency(s1List, c) > Collections.frequency(s2List, c) ? 1
                    : Collections
                            .frequency(s1List, c) == Collections.frequency(s2List, c) ? 0 : 2);
        }

        StringBuilder str = new StringBuilder();
        int i = 0;
        for (Character l : each) {
            if (times.get(i) == 2) {
                str.append("2:");
                for (int j = 0; j < Collections.frequency(s2List, l); j++) {
                    str.append(l);
                }

            } else if (times.get(i) == 1) {
                str.append("1:");
                for (int j = 0; j < Collections.frequency(s1List, l); j++) {
                    str.append(l);
                }
            } else {
                str.append("=:");
                for (int j = 0; j < Collections.frequency(s2List, l); j++) {
                    str.append(l);
                }
            }
            str.append("/");
            i++;
        }

        String[] strF = str.toString().split("/");

        Arrays.sort(strF, new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return Integer.compare(s2.length(), s1.length());
            }
        });

        ArrayList<Integer> lngs = new ArrayList<Integer>();
        for (String s : strF) {
            if (!lngs.contains(s.length())) {
                lngs.add(s.length());
            }
        }
        ArrayList<String> strOut = new ArrayList<String>();
        ArrayList<String> temp = new ArrayList<String>();

        for (Integer l : lngs) {
            temp.clear();
            for (int g = 0; g < strF.length; g++) {
                if (strF[g].length() == l) {
                    temp.add(strF[g]);
                }
            }
            Collections.sort(temp, new Comparator<String>() {
                @Override
                public int compare(String s1, String s2) {
                    return Character.compare(s1.charAt(0), s2.charAt(0));
                }
            });
            strOut.add(temp.toString().replaceAll("[\\[\\]]", ""));
        }

        String StringFinal = strOut.toString();
        StringFinal = StringFinal.replaceAll(", ", "/");
        StringFinal = StringFinal.replaceAll("[\\[\\]]", "");

        return StringFinal;
    }

    public static void main(String[] args) throws Exception {

        String s1 = "my&friend&Paul has heavy hats! &";
        String s2 = "my friend John has many many friends &";

        String t1 = "bbbb";
        String t2 = "aaaa";

        System.out.print(mix(s1, s2));

    }
}


//https://www.codewars.com/kata/52efefcbcdf57161d4000091/java
public class App {
    public static Map<Character, Integer> count(String str) {
        // Happy coding!
        Map<Character, Integer> map = new HashMap<Character, Integer>();
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (map.containsKey(c)) {
                map.put(c, map.get(c) + 1);
            } else {
                map.put(c, 1);
            }
        }
        return map;
    }

    public static void main(String[] args) throws Exception {
        System.out.println(count("aabbccyy"));
    }
}



//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
public class App {
    static String encode(String word) {
        word = word.toLowerCase();
        char[] w = word.toCharArray();

        ArrayList<Integer> times = new ArrayList<Integer>();
        boolean rpt = false;
        for (int i = 0; i < w.length; i++) {
            rpt = false;
            for (int j = 0; j < w.length; j++) {
                if ((w[i] == w[j]) && (j != i)) {
                    rpt = true;
                    break;
                }
            }
            times.add(rpt == true ? 1 : 0);
        }

        StringBuilder str = new StringBuilder();
        int[] wC = times.stream().mapToInt(i -> i).toArray();
        for (int i = 0; i < w.length; i++) {
            str.append(wC[i] == 1 ? ")" : "(");
        }

        return str.toString();
    }

    public static void main(String[] args) throws Exception {
        System.out.println(encode("Success"));
    }
}