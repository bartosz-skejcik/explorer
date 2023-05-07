interface Article {
    type_of: string;
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    slug: string;
    path: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    collection_id: number | null;
    published_timestamp: string;
    positive_reactions_count: number;
    cover_image: string | null;
    social_image: string;
    canonical_url: string | null;
    created_at: string;
    edited_at: string | Date | null;
    crossposted_at: string | Date | null;
    published_at: string | Date;
    last_comment_at: string | Date | null;
    reading_time_minutes: number;
    tag_list: string[];
    tags: string;
    user: ArticleUser;
    organization: ArticleOrganization | null;
    flare_tag: ArticleFlareTag | null;
}

type ArticleUser = {
    name: string;
    username: string;
    twitter_username: string | null;
    github_username: string | null;
    user_id: number;
    website_url: string | null;
    profile_image: string;
    profile_image_90: string;
};

type ArticleOrganization = {
    name: string;
    username: string;
    slug: string;
    profile_image: string;
    profile_image_90: string;
};

type ArticleFlareTag = {
    name: string;
    bg_color_hex: string;
    text_color_hex: string;
};
