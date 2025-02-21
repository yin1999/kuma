// Package types provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/oapi-codegen/oapi-codegen/v2 version v2.4.1 DO NOT EDIT.
package types

// Defines values for ResourceTypeDescriptionScope.
const (
	Global ResourceTypeDescriptionScope = "Global"
	Mesh   ResourceTypeDescriptionScope = "Mesh"
)

// FromRule defines model for FromRule.
type FromRule struct {
	Inbound Inbound `json:"inbound"`
	Rules   []Rule  `json:"rules"`
}

// HttpMatch defines model for HttpMatch.
type HttpMatch struct {
	Hash  string      `json:"hash"`
	Match interface{} `json:"match"`
}

// Inbound defines model for Inbound.
type Inbound struct {
	Name *string           `json:"name,omitempty"`
	Port int               `json:"port"`
	Tags map[string]string `json:"tags"`
}

// InspectRule defines model for InspectRule.
type InspectRule struct {
	// FromRules a set of rules for each inbound of this proxy
	FromRules *[]FromRule `json:"fromRules,omitempty"`

	// ProxyRule a rule that affects the entire proxy
	ProxyRule *ProxyRule `json:"proxyRule,omitempty"`

	// ToResourceRules a set of rules for the outbounds produced by real resources (i.e MeshService, MeshExternalService, MeshMultiZoneService).
	ToResourceRules *[]ResourceRule `json:"toResourceRules,omitempty"`

	// ToRules a set of rules for the outbounds of this proxy. The field is not set when 'meshService.mode' on Mesh is set to 'Exclusive'.
	ToRules *[]Rule `json:"toRules,omitempty"`

	// Type the type of the policy
	Type string `json:"type"`

	// Warnings a set of warnings to show in policy matching
	Warnings *[]string `json:"warnings,omitempty"`
}

// Meta defines model for Meta.
type Meta struct {
	// Labels the label of the resource
	Labels map[string]string `json:"labels"`

	// Mesh the mesh this resource is part of
	Mesh string `json:"mesh"`

	// Name the name of the resource
	Name string `json:"name"`

	// Type the type of this resource
	Type string `json:"type"`
}

// PolicyDescription information about a policy
type PolicyDescription struct {
	// HasFromTargetRef indicates that this policy can be used as an inbound policy
	HasFromTargetRef bool `json:"hasFromTargetRef"`

	// HasToTargetRef indicates that this policy can be used as an outbound policy
	HasToTargetRef bool `json:"hasToTargetRef"`

	// IsTargetRef whether this policy uses targetRef matching
	IsTargetRef bool `json:"isTargetRef"`
}

// ProxyRule a rule that affects the entire proxy
type ProxyRule struct {
	// Conf The actual conf generated
	Conf   interface{} `json:"conf"`
	Origin []Meta      `json:"origin"`
}

// ResourceRule defines model for ResourceRule.
type ResourceRule struct {
	// Conf The actual conf generated
	Conf []interface{} `json:"conf"`

	// Origin The list of policies that contributed to the 'conf'. The order is important as it reflects in what order confs were merged to get the resulting 'conf'.
	Origin              []ResourceRuleOrigin `json:"origin"`
	ResourceMeta        Meta                 `json:"resourceMeta"`
	ResourceSectionName *string              `json:"resourceSectionName,omitempty"`
}

// ResourceRuleOrigin defines model for ResourceRuleOrigin.
type ResourceRuleOrigin struct {
	ResourceMeta *Meta `json:"resourceMeta,omitempty"`

	// RuleIndex index of the to-item in the policy
	RuleIndex *int `json:"ruleIndex,omitempty"`
}

// ResourceTypeDescription Description of a resource type, this is useful for dynamically generated clients and the gui
type ResourceTypeDescription struct {
	// IncludeInFederation description resources of this type should be included in federetion-with-policies export profile (especially useful for moving from non-federated to federated or migrating to a new global).
	IncludeInFederation bool `json:"includeInFederation"`

	// Name the name of the resource type
	Name string `json:"name"`

	// Path the path to use for accessing this resource. If scope is `Global` then it will be `/<path>` otherwise it will be `/meshes/<path>`
	Path              string `json:"path"`
	PluralDisplayName string `json:"pluralDisplayName"`

	// Policy information about a policy
	Policy              *PolicyDescription           `json:"policy,omitempty"`
	ReadOnly            bool                         `json:"readOnly"`
	Scope               ResourceTypeDescriptionScope `json:"scope"`
	SingularDisplayName string                       `json:"singularDisplayName"`
}

// ResourceTypeDescriptionScope defines model for ResourceTypeDescription.Scope.
type ResourceTypeDescriptionScope string

// Rule defines model for Rule.
type Rule struct {
	// Conf The actual conf generated
	Conf     interface{}   `json:"conf"`
	Matchers []RuleMatcher `json:"matchers"`
	Origin   []Meta        `json:"origin"`
}

// RuleMatcher A matcher to select which traffic this conf applies to
type RuleMatcher struct {
	// Key the key to match against
	Key string `json:"key"`

	// Not whether we check on the absence of this key:value pair
	Not bool `json:"not"`

	// Value the value for the key to match against
	Value string `json:"value"`
}
