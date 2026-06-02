#!/usr/bin/env python3
from __future__ import annotations

import argparse
from datetime import datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MEMORY = ROOT / "memory" / "PROJECT_MEMORY.md"


def read_text_arg(value: str | None) -> str:
    if not value:
        return ""

    maybe_path = Path(value).expanduser()
    try:
        if maybe_path.exists() and maybe_path.is_file():
            return maybe_path.read_text(encoding="utf-8").strip()
    except OSError:
        pass

    return value.strip()


def append_entry(title: str, summary: str, decisions: str, todos: str) -> None:
    date = datetime.now().strftime("%Y-%m-%d %H:%M")
    chunks = [
        "\n---\n",
        f"\n## Session Update - {date}\n",
        f"\n### {title}\n",
    ]

    if summary:
        chunks.append(f"\n**Summary**\n\n{summary}\n")
    if decisions:
        chunks.append(f"\n**Decisions**\n\n{decisions}\n")
    if todos:
        chunks.append(f"\n**Todos / Open Questions**\n\n{todos}\n")

    with MEMORY.open("a", encoding="utf-8") as file:
        file.write("".join(chunks))


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Append a concise session summary to memory/PROJECT_MEMORY.md for future Codex sessions."
    )
    parser.add_argument("--title", default="Portfolio Iteration", help="Short heading for this update.")
    parser.add_argument("--summary", help="Summary text or path to a markdown/text file.")
    parser.add_argument("--decisions", help="Decision text or path to a markdown/text file.")
    parser.add_argument("--todos", help="Todo text or path to a markdown/text file.")
    args = parser.parse_args()

    summary = read_text_arg(args.summary)
    decisions = read_text_arg(args.decisions)
    todos = read_text_arg(args.todos)

    if not any([summary, decisions, todos]):
        raise SystemExit(
            "Nothing to append. Provide --summary, --decisions, or --todos. "
            "Each can be direct text or a path to a text/markdown file."
        )

    append_entry(args.title, summary, decisions, todos)
    print(f"Updated {MEMORY}")


if __name__ == "__main__":
    main()
