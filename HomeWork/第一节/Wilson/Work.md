3. �鼶Ԫ��������Ԫ�أ��ֱ�����Щ������ʲô����
��
1���鼶Ԫ�� div img button ul li 
2������Ԫ�� span a link strong
3���鼶Ԫ�ض�ռһ�У������ÿ�ߡ��߾ࡢpadding������Ԫ�ز���ռһ�У�����������һ������ÿ����Ч

4. ʵ��һ��Tab�����UI���֣�Ҫ�����£�
   - ����������Ϊ 600px���߶�Ϊ 600px��
   - �� ul li ʵ�� Tab ������ť���֡�
   - ��������������������֣��������������һ�� 100px * 100px �ĺ�ɫ���飬�������������� 100px��������������� 100px���м���������ˮƽ��ֱ���з�һ�� 100px * 100px �Ļ�ɫ���飻�ұ�����������һ�� 100px * 100px ����ɫ���飬�����������ײ� 100px�������������ұ� 100px��
   - ����ʹ�� Table ��ǩ��

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
            <a href="#t1">һ</a>
        </li>
        <li>
            <div class="content" id="t2">��</div>
            <a href="#t2">��</a>
        </li>
    </ul>
</body>
</html>