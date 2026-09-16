# chengjiang-zi.github.io

澄江子的作品集站。纯静态，没有构建步骤，没有外部依赖。

## 本地预览

直接双击 `index.html` 就能看。想更接近线上环境，在本目录起一个服务：

```
python -m http.server 8000
```

然后打开 http://localhost:8000

## 文件分工

| 文件 | 作用 |
|---|---|
| `index.html` | 页面骨架与渲染逻辑。加作品不用动它 |
| `style.css` | 全部样式。配色变量收在文件开头的 `:root` 里 |
| `works.js` | **作品数据**。改文字、加作品都改这一个文件 |
| `assets/` | 图片，每个作品一个子目录 |
| `.nojekyll` | 空文件，让 GitHub 跳过 Jekyll 处理，不要删 |

## 加一个作品

打开 `works.js`，把 `WORKS` 数组里那个对象整段复制、粘在后面，改掉内容。页面会自动多出一张卡片。

图片放进 `assets/作品id/`，然后在 `shots` 里写相对路径。

字段含义写在 `works.js` 开头的注释里。

## 改配色

`style.css` 顶部的 `:root` 里改。`--accent` 是强调色，`--bg` 是页面底色，`--surface` 是卡片底色。

## 上线与下线

仓库名必须是 `chengjiang-zi.github.io`，一字不差，默认地址才会生效。**这个名字不要改**，改了就不再是 User Site，重新上线时还得改回来。

**上线**：Settings → Pages → Source 选 `Deploy from a branch`，Branch 选 `main`，目录选 `/ (root)`，Save。等一两分钟，地址是 https://chengjiang-zi.github.io

**下线**：同一个页面点「取消发布该网站」（Unpublish site）。站点几分钟内变 404，文件和仓库名都保留。

**重新上线**：回同一个页面，Source 重新选 `Deploy from a branch`，Branch 选 `main`，Save。不需要重建仓库，也不需要重推代码。

**注意**：免费账号的 Pages 只对公开仓库开放。如果仓库被转成了 Private，重新上线前要先转回 Public。

## 上线前检查

- [x] `works.js` 里 `PROFILE.contact` 已填 `achengjiangzi@qq.com`
- [x] 仓库为公开（免费账号的 Pages 只对公开仓库开放）
- [ ] 页脚那行学习性质声明留着。GitHub 的条款要求这类复刻性质的练习项目必须写明
- [ ] 截图建议用 release 版重拍，不要带调试按钮

`PROFILE.realName` 留空，页面上就不会出现真名。想放再填。
