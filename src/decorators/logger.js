export default function log(target, name, descriptor) {
    console.log(name);
    console.log(target);
    console.log(descriptor);
}