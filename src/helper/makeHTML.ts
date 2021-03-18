export default function makeHTML(title: string, uri: string) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        html, body { height: 100%; }
    </style>
</head>
<body>
    <iframe src="${uri}" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
</body>
</html>
`
}
