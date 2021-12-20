import {
  assertEquals,
  assertArrayIncludes,
  assert,
} from "https://deno.land/std/testing/asserts.ts";
import {
  fibo_for_loop,
  fibo_recursion,
  fibo_while_loop,
} from "../src/index.ts";
Deno.test("fibonacci sequence test", () => {
  assert(fibo_recursion(5));
  assertEquals(fibo_recursion(3), [0, 1, 1]);
  assertArrayIncludes(fibo_recursion(10), [0, 5, 34]);

  assert(fibo_for_loop(5));
  assertEquals(fibo_for_loop(3), [0, 1, 1, 2, 3]);
  assertArrayIncludes(fibo_for_loop(10), [0, 5, 34]);

  assert(fibo_while_loop(5));
  assertEquals(fibo_while_loop(3), [0, 1, 1, 2, 3]);
  assertArrayIncludes(fibo_while_loop(10), [0, 5, 34]);
});
