export const categories: { name: string, value: string }[] = [
        { name: "Finanza", value: "Finance" },
        { name: "Recensione", value: "Review" },
        { name: "Scienza", value: "Science" },
        { name: "Sicurezza", value: "Security" },
]

export type category = typeof categories[number];