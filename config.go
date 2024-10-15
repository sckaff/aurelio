package main

type TankConfig struct {
	Id int    `json:"id"`
	P  Vector `json:"p"`
}

type SceneConfig struct {
	P       Vector `json:"p"`
	Variant int    `json:"variant"`
}

type ClientConfig struct {
	PlayerTanks     []TankConfig  `json:"playerTanks"`
	EnemyTanks      []TankConfig  `json:"enemyTanks"`
	Hexes           []SceneConfig `json:"hexes"`
	Sites           []SceneConfig `json:"sites"`
	DriveRange      int           `json:"driveRange"`
	VisibilityRange int           `json:"visibilityRange"`
	FireRange       int           `json:"fireRange"`
	Center          Vector        `json:"center"`
}

type GameConfig struct {
	tanksP1         []TankConfig
	tanksP2         []TankConfig
	hexes           []SceneConfig
	sites           []SceneConfig
	driveRange      int
	visibilityRange int
	fireRange       int
	p1First         bool
	center          Vector
	shrinkAfter     int
	shrinkInterval  int
	radius          int
}

func (gc GameConfig) ClientConfigs() (ClientConfig, ClientConfig) {
	p1 := ClientConfig{
		gc.tanksP1,
		gc.tanksP2,
		gc.hexes,
		gc.sites,
		gc.driveRange,
		gc.visibilityRange,
		gc.fireRange,
		gc.center,
	}
	p2 := ClientConfig{
		gc.tanksP2,
		gc.tanksP1,
		gc.hexes,
		gc.sites,
		gc.driveRange,
		gc.visibilityRange,
		gc.fireRange,
		gc.center,
	}
	return p1, p2
}

func NewBasicConfig(swapPlayers, p1First bool) GameConfig {
	center := Vector{2, 1}
	tanksP1 := []TankConfig{
		{1, Vector{0, 0}},
		{2, Vector{2, -2}},
	}
	tanksP2 := []TankConfig{
		{3, Vector{-2, -1}},
		{4, Vector{0, 1}},
	}
	hexes := []SceneConfig{
		{Vector{1, -2}, 2},
		{Vector{2, -2}, 1},
		{Vector{-2, -1}, 2},
		{Vector{-1, -1}, 2},
		{Vector{0, -1}, 2},
		{Vector{-2, 0}, 0},
		{Vector{0, 0}, 0},
		{Vector{1, 0}, 1},
		{Vector{-2, 1}, 0},
		{Vector{-1, 1}, 0},
		{Vector{0, 1}, 0},
		{Vector{1, 1}, 1},
		{Vector{-2, 2}, 0},
		{Vector{-1, 2}, 0},
	}
	radius := 0
	for _, h := range hexes {
		radius = max(radius, h.P.distance(center))
	}

	return GameConfig{
		tanksP1: tanksP1,
		tanksP2: tanksP2,
		hexes:   hexes,
		sites: []SceneConfig{
			{Vector{1, 0}, 8},
			{Vector{-1, 2}, 6},
		},
		driveRange:      5,
		visibilityRange: 2,
		fireRange:       3,
		p1First:         p1First,
		center:          center,
		shrinkAfter:     2,
		shrinkInterval:  3,
		radius:          radius,
	}
}
