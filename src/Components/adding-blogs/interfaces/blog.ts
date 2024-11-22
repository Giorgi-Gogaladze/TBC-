export interface Blog {
    id: number
    title: string
    body: string
}

export interface AddingBlogsProps {
    handleCreateBlogs: (blog: Blog) => void
    handleEdit: (blog: Blog) => void
    editedBlogs?: Blog | null
}