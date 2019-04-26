3. 块级元素与行内元素，分别有哪些？各有什么区别？
答：
1、块级元素 div img button ul li 
2、行内元素 span a link strong
3、块级元素独占一行，可设置宽高、边距、padding，行内元素不会占一行，问题排列在一行里，设置宽高无效

4. 实现一个Tab组件的UI部分，要求如下：
   - 整个组件宽度为 600px，高度为 600px。
   - 用 ul li 实现 Tab 顶部按钮部分。
   - 下面的内容区，三栏布局，左边内容区，放一个 100px * 100px 的红色方块，距离内容区顶部 100px，距离内容区左边 100px；中间内容区，水平垂直居中放一个 100px * 100px 的黄色方块；右边内容区，放一个 100px * 100px 的蓝色方块，距离内容区底部 100px，距离内容区右边 100px。
   - 不能使用 Table 标签。

<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none;
            color: #000;
        }

        ul {
            position: relative;
            width: 600px;
            height: 600px;
        }

            ul li {
                list-style: none;
            }

                ul li a {
                    float: left;
                    width: 100px;
                    text-align: center;
                    line-height: 30px;
                }

                ul li .content {
                    opacity: 0;
                    position: absolute;
                    left: 0;
                    top: 31px;
                    width: 100%;
                    height: 600px;
                    border: 1px solid #000;
                    box-sizing: border-box;
                    font-size: 24px;
                    text-align: center;
                }

                    ul li .content:target {
                        opacity: 1;
                    }

                        ul li .content:target + a {
                            color: #fff;
                            background-color: #e9e4e4;
                        }

                        ul li .content .c_main{
                            position:relative;
                            width:600px;
                            height:600px;
                        }
                        ul li .content .c_main .c1{
                            position:absolute;
                            width:100px;
                            height:100px;
                            background-color:#ff0000;
                            top:100px;
                            left:100px;
                        }
                        ul li .content .c_main .c2{
                            width:100px;
                            height:100px;
                            background-color:#ffd800;
                            position:absolute;
                            top:100px;
                            left:200px;
                        }
                        ul li .content .c_main .c3{
                            width:100px;
                            height:100px;
                            background-color:cornflowerblue;
                            position:absolute;
                            right:100px;
                            bottom:100px;
                        }
    </style>
</head>
<body>


    <ul>
        <li>
            <div class="content" id="t1">
                <div class="c_main">
                    <div class="c1"></div>
                    <div class="c2"></div>
                    <div class="c3"></div>
                </div>
            </div>
            <a href="#t1">一</a>
        </li>
        <li>
            <div class="content" id="t2">二</div>
            <a href="#t2">二</a>
        </li>
    </ul>
</body>
</html>