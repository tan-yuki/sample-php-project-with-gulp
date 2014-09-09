<?php
namespace Hoge\Test\Foo;

use Hoge\Foo\Fuga;

class FugaTest extends \PHPUnit_Framework_TestCase
{
    public function testFugafuga()
    {
        $fuga = new Fuga();
        $this->assertSame('hello world', $fuga->helloworld());
    }
}
