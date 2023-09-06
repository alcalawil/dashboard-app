import { Role } from "./common/types";
import type { ApiKeyResponse, Invite, Member, Organization, Platform } from "./services/apiClient";

export const mockMember: Member = {
	id: "123456789",
	createdAt: "2023-08-30T10:00:00Z",
	deactivatedAt: "2023-08-31T15:30:00Z",
	deletedAt: undefined,
	email: "juan@perez.com",
	name: "Juan Perez",
	role: Role.ADMIN
};

// eslint-disable-next-line prefer-const
export let mockApiKeys: ApiKeyResponse[] = [
	{
		id: "api-key-1",
		createdAt: "2023-09-06T08:00:00Z",
		updatedAt: "2023-09-06T08:30:00Z",
		type: "public",
		data: "API_KEY_DATA_1",
		hint: "API_KEY_HINT_1",
		description: "This is a mock API key 1",
		createdBy: "John Doe",
		platformId: "platform-1"
	},
	{
		id: "api-key-2",
		createdAt: "2023-09-06T09:00:00Z",
		updatedAt: "2023-09-06T09:45:00Z",
		type: "public",
		data: "API_KEY_DATA_2",
		hint: "API_KEY_HINT_2",
		description: "This is a mock API key 2",
		createdBy: "Jane Smith",
		platformId: "platform-1"
	},
	{
		id: "api-key-3",
		createdAt: "2023-09-06T10:15:00Z",
		updatedAt: "2023-09-06T11:00:00Z",
		type: "public",
		data: "API_KEY_DATA_3",
		hint: "API_KEY_HINT_3",
		description: "This is a mock API key 3",
		createdBy: "Bob Johnson",
		platformId: "platform-2"
	},
	{
		id: "api-key-4",
		createdAt: "2023-09-06T11:30:00Z",
		updatedAt: "2023-09-06T12:15:00Z",
		type: "secret",
		data: "API_KEY_DATA_4",
		hint: "API_KEY_HINT_4",
		description: "This is a mock API key 4",
		createdBy: "Alice Davis",
		platformId: "platform-2"
	},
	{
		id: "api-key-5",
		createdAt: "2023-09-06T12:45:00Z",
		updatedAt: "2023-09-06T13:30:00Z",
		type: "secret",
		data: "API_KEY_DATA_5",
		hint: "API_KEY_HINT_5",
		description: "This is a mock API key 5",
		createdBy: "Ethan Wilson",
		platformId: "platform-3"
	}
];

export const mockApiKey = mockApiKeys[0];

export const platformMocks: Platform[] = [
	{
		id: "platform-1",
		createdAt: "2023-09-06T08:00:00Z",
		name: "Platform 1",
		description: "This is a mock platform 1",
		domains: ["example.com", "platform1.com"],
		ipAddresses: ["192.168.1.1", "10.0.0.1"],
		organizationId: "org-1"
	},
	{
		id: "platform-2",
		createdAt: "2023-09-06T09:00:00Z",
		name: "Platform 2",
		description: "This is a mock platform 2",
		domains: ["platform2.com", "testplatform.com"],
		ipAddresses: ["192.168.2.1", "10.0.0.2"],
		organizationId: "org-1"
	},
	{
		id: "platform-3",
		createdAt: "2023-09-06T10:00:00Z",
		deactivatedAt: "2023-09-07T15:00:00Z",
		name: "Platform 3",
		description: "This is a deactivated mock platform",
		domains: ["platform3.com"],
		ipAddresses: ["192.168.3.1"],
		organizationId: "org-2"
	}
];

export const platformMock = platformMocks[0];

export const organizationMocks: Organization[] = [
	{
		id: "org-1",
		createdAt: "2023-09-06T08:00:00Z",
		name: "Stark Inc",
		description: "Tony Stark Compamy"
	}
];

export const organizationMock = organizationMocks[0];

export const memberMocks: Member[] = [
	{
		id: "member-1",
		createdAt: "2023-09-06T08:00:00Z",
		email: "member1@example.com",
		name: "Tony Stark",
		role: Role.OWNER
	},
	{
		id: "member-2",
		createdAt: "2023-09-06T09:00:00Z",
		email: "member2@example.com",
		name: "Peter Parker",
		role: Role.MEMBER
	},
	{
		id: "member-3",
		createdAt: "2023-09-06T10:00:00Z",
		deactivatedAt: "2023-09-07T15:00:00Z",
		deletedAt: "2023-09-08T10:00:00Z",
		email: "member3@example.com",
		name: "Pedro Perez",
		role: Role.MEMBER
	}
];

export const memberMock = memberMocks[0];

export const inviteMocks: Invite[] = [
	{
		id: "invite-1",
		createdAt: "2023-09-06T08:00:00Z",
		email: "invitee1@example.com",
		name: "Invitee 1",
		role: Role.MEMBER,
		organizationName: "Organization A",
		status: "pending"
	},
	{
		id: "invite-2",
		createdAt: "2023-09-06T09:00:00Z",
		email: "invitee2@example.com",
		name: "Invitee 2",
		role: Role.MEMBER,
		organizationName: "Organization B",
		status: "accepted"
	},
	{
		id: "invite-3",
		createdAt: "2023-09-06T10:00:00Z",
		expiredAt: "2023-09-07T15:00:00Z",
		deletedAt: "2023-09-08T10:00:00Z",
		email: "invitee3@example.com",
		name: "Invitee 3",
		role: Role.MEMBER,
		organizationName: "Organization C",
		status: "expired"
	}
];

export const inviteMock = inviteMocks[0];
