export const categories: { name: string, value: string }[] = [
        { name: "Finanza", value: "FINANCE" },
        { name: "Recensione", value: "REVIEW" },
        { name: "Scienza", value: "SCIENCE" },
        { name: "Sicurezza", value: "SECURITY" },
]

export type category = typeof categories[number];