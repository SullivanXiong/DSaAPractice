# DSaAPractice

Data structures and Algorithms are a necessary for any good programmer to effectively push out tasks and features with the best implementation at hand. This repository will contain some common data structures and algorithms and allows users to run test cases against their code.

## Python

`pytest -v .\data-structures\ds1-array\calcudoku\{username}-python\calcudoku_test.py`

## Javascript

`npx jest --testPathPattern="./data-structures/ds1-array/calcudoku/{username}-javascript/calcudokuTest.js"`

## Java

This assumes you're running it from the root directory level.

Build:
`javac -cp ".;util/junit-platform-console-standalone-1.9.3.jar;util/junit-jupiter-params-5.11.3.jar" .\data-structures\ds1-array\calcudoku\{username}-java\Calcudoku.java .\data-structures\ds1-array\calcudoku\{username}-java\CalcudokuTest.java`

Running Tests
`java -DtestDir="data-structures\ds1-array\calcudoku\test" -jar util/junit-platform-console-standalone-1.9.3.jar --class-path .\data-structures\ds1-array\calcudoku\{username}-java\ --scan-classpath`

Windows Build and Test:
`javac -cp ".;util/junit-platform-console-standalone-1.9.3.jar;util/junit-jupiter-params-5.11.3.jar" .\data-structures\ds1-array\calcudoku\{username}-java\Calcudoku.java .\data-structures\ds1-array\calcudoku\{username}-java\CalcudokuTest.java; if ($?) { java -DtestDir="data-structures\ds1-array\calcudoku\test" -jar util/junit-platform-console-standalone-1.9.3.jar --class-path .\data-structures\ds1-array\calcudoku\{username}-java\ --scan-classpath }`
