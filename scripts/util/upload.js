import fs from 'node:fs'
import { execa } from 'execa'
// 读取目录文件
function readDir(dir, files) {
    fs.readdirSync(dir).forEach(file => {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            files[dir + '/' + file] = 'Dir';
            readDir(dir + '/' + file, files);
        }
        else {
            files[dir + '/' + file] = 'File';
        }
    });
}
// 读取目标目录下的文件集合
export function buildFileMap(dir) {
    const files = {};
    readDir(dir, files);
    return files;
}

// zip
export async function zip(pkg, dir) {
    await execa('zip', ['-r', `${pkg}.zip`, dir], { stdio: 'inherit' })
}

// unzip
export async function unzip(zipfile) {
    await execa(`unzip`, ['-o', zipfile], { stdio: 'inherit' })
}

// rm zip
export async function rmZip(zipfile) {
    await execa(`rm`, ['-rf', zipfile], { stdio: 'inherit' })
}

// 构造单个 Blob 对象
export function buildBlob(filepath) {
    return new Blob([new Uint8Array(fs.readFileSync(filepath))], {
        type: 'application/javascript',
    });
}
// 构造 Blob 对象集合
export function buildBlobs(filepaths) {
    const map = new Map();
    filepaths.forEach(filepath => {
        map.set(filepath, buildBlob(filepath));
    });
    return map;
}
// 添加单个文件到表单
export function formDataAppendSingle(formData, blob, filename) {
    formData.append('esmfiles', blob, filename);
}
// 添加一个文件集合到表单
export function formDataAppendMulti(formData, map) {
    map.forEach((blob, filename) => {
        formDataAppendSingle(formData, blob, filename);
    });
}
// 上传方法
export function uploadZip(FormData, version) {
    return fetch(`http://127.0.0.1:3000/-/upload?version=${version}`, {
        method: 'POST',
        body: FormData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export function uploadSingle(FormData, pkg, version) {
    return fetch(`http://127.0.0.1:3000/-/upload?pkg=${pkg}&version=${version}`, {
        method: 'POST',
        body: FormData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export function uploadMeta(obj) {
    return fetch(`http://127.0.0.1:3000/-/uploadmeta`, {
        method: 'POST',
        body: obj,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}