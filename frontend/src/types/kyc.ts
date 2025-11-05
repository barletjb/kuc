
export interface KycProfile {
    id: string;
    userId: string;
    name: string;
    company: string;
    email: string;
    customer_identity: File | string | null;
    client_contract: File | string | null;
    police_report: File | string | null;
    status: 'pending' | 'approved' | 'rejected';
    createdAt: Date;
    updatedAt: Date;
}