import { db } from "./prisma/db";

// GET - READ
async function main() {
    const users = await db.orm.public.User.all()
    const posts = await db.orm.public.Post.all()
    console.log(users , posts)

}
main()
//POST - CREATE
async function create() {
    const user = await db.orm.public.User.create({
        email: "shuvo@gmail.com",
        username: "shuvo123",
        name: "shuvo",
    });

    const post = await db.orm.public.Post.create({
        title: "Jibon Kotha",
        content: "Jibon Alap",
        authorId: user.id,
    })

    console.log(user, post)

}

// create()

//UPDATE - PATCH
async function update() {

    const updatedUser = await db.orm.public.User
        .where((user) => user.id.eq(1))
        .update({
            username: "new_name",
        });

    console.log(updatedUser);

}

// update()

// DELETE 

async function drop() {
    const drop = await db.orm.public.User.where((user)=>
        user.id.eq(1)).delete( )
    }

// drop()