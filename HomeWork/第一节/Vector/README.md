#### 选择器优先级的学习和理解
选择器优先级的规定
关于优先级的规定，常用的方法是给不同的选择器分配权值：

id选择器优先级很高，权值为100
class、属性和伪类选择器的权值为10
标签选择器权值为1
在比较样式的优先级时，只需统计选择符中的id、class和标签名的个数，然后把相应的权值相加即可，最后根据结果排出优先级
权值较大的优先级越高
权值相同的，后定义的优先级较高
样式值含有！important，优先级最高

作者：犯迷糊的小羊
链接：https://www.jianshu.com/p/a53ba8e1fe72
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。

#### 块级元素与行内元素，分别有哪些？各有什么区别？
常见的块状元素
- address – 地址
- blockquote – 块引用
- center – 举中对齐块
- dir – 目录列表
- div – 常用块级容易，也是CSS layout的主要标签
- dl – 定义列表
- fieldset – form控制组
- form – 交互表单
- h1 – 大标题
- h2 – 副标题
- h3 – 3级标题
- h4 – 4级标题
- h5 – 5级标题
- h6 – 6级标题
- hr – 水平分隔线
- isindex – input prompt
- menu – 菜单列表
- noframes – frames可选内容，（对于不支持frame的浏览器显示此区块内容
- noscript – 可选脚本内容（对于不支持script的浏览器显示此内容）
- ol – 有序表单
- p – 段落
- pre – 格式化文本
- table – 表格
- ul – 无序列表

常见的内联元素
- a – 锚点
- abbr – 缩写
- acronym – 首字
- b – 粗体(不推荐)
- bdo – bidi override
- big – 大字体
- br – 换行
- cite – 引用
- code – 计算机代码(在引用源码的时候需要)
- dfn – 定义字段
- em – 强调
- font – 字体设定(不推荐)
- i – 斜体
- img – 图片
- input – 输入框
- kbd – 定义键盘文本
- label – 表格标签
- q – 短引用
- s – 中划线(不推荐)
- samp – 定义范例计算机代码
- select – 项目选择
- small – 小字体文本
- span – 常用内联容器，定义文本内区块
- strike – 中划线
- strong – 粗体强调
- sub – 下标
- sup – 上标
- textarea – 多行文本输入框
- tt – 电传文本
- u – 下划线

行内元素与块级元素有什么不同？

区别一：
块级：块级元素会独占一行，默认情况下宽度自动填满其父元素宽度
行内：行内元素不会独占一行，相邻的行内元素会排在同一行。其宽度随内容的变化而变化。

区别二：
块级：块级元素可以设置宽高
行内：行内元素不可以设置宽高

区别三：
块级：块级元素可以设置margin，padding
行内：行内元素水平方向的margin-left; margin-right; padding-left; padding-right;可以生效。但是竖直方向的margin-bottom; margin-top; padding-top; padding-bottom;却不能生效。

区别四：
块级：display:block;
行内：display:inline;
可以通过修改display属性来切换块级元素和行内元素

